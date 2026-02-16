"use client";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { removeFromCompare, clearCompare } from "@/lib/slices/compareSlice";
import { addToCart } from "@/lib/slices/cartSlice";
import { showToast } from "@/components/Toast/Toast";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaBalanceScale, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";

export default function ComparePage() {
  const dispatch = useAppDispatch();
  const compareItems = useAppSelector((state) => state.compare.items);
  const maxItems = useAppSelector((state) => state.compare.maxItems);

  const handleRemove = (productId: number, productName: string) => {
    dispatch(removeFromCompare(productId));
    showToast(`${productName} removed from comparison`);
  };

  const handleClearAll = () => {
    dispatch(clearCompare());
    showToast("Comparison list cleared");
  };

  const handleAddToCart = (product: {
    id: number;
    title: string;
    price: number;
    image: string;
  }) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      }),
    );
    showToast(`${product.title} added to cart!`);
  };

  if (compareItems.length === 0) {
    return (
      <div className={styles.comparePage}>
        <div className={styles.emptyState}>
          <FaBalanceScale className={styles.emptyIcon} />
          <h2>No Products to Compare</h2>
          <p>Add products to compare their features side by side.</p>
          <Link href="/products" className={styles.browseButton}>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.comparePage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Compare Products ({compareItems.length}/{maxItems})
        </h1>
        <button onClick={handleClearAll} className={styles.clearButton}>
          Clear All
        </button>
      </div>

      <div className={styles.compareInfo}>
        You can compare up to {maxItems} products at a time
      </div>

      <div className={styles.compareGrid}>
        {compareItems.map((product) => (
          <div key={product.id} className={styles.productColumn}>
            <div className={styles.productHeader}>
              <button
                onClick={() => handleRemove(product.id, product.title)}
                className={styles.removeButton}
                aria-label="Remove from comparison"
              >
                <FaTimes />
              </button>
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.title}</h3>
            </div>

            <div className={styles.compareRow}>
              <span className={styles.rowLabel}>Price</span>
              <span className={`${styles.rowValue} ${styles.price}`}>
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className={styles.compareRow}>
              <span className={styles.rowLabel}>Rating</span>
              <div className={styles.rating}>
                <FaStar className={styles.starIcon} />
                <span className={styles.rowValue}>
                  {product.rating?.rate || "N/A"}
                </span>
                <span className={styles.ratingCount}>
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>
            </div>

            <div className={styles.compareRow}>
              <span className={styles.rowLabel}>Category</span>
              <span className={styles.category}>{product.category}</span>
            </div>

            <div className={styles.compareRow}>
              <span className={styles.rowLabel}>Description</span>
              <p className={styles.description}>{product.description}</p>
            </div>

            <div className={styles.compareRow}>
              <span className={styles.rowLabel}>Actions</span>
              <div className={styles.actionButtons}>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/products/details/${product.id}`}
                  className={styles.viewButton}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
