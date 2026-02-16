"use client";

import Image from "next/image";
import styles from "./productsList.module.css";
import { FaStar, FaBalanceScale } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { toggleCompare } from "@/lib/slices/compareSlice";
import { showToast } from "@/components/Toast/Toast";
import type { Product } from "@/lib/types";

interface ProductsListProps {
  product: Product;
}

function ProductsList({ product }: ProductsListProps) {
  const dispatch = useAppDispatch();
  const compareItems = useAppSelector((state) => state.compare.items);
  const maxCompareItems = useAppSelector((state) => state.compare.maxItems);

  const isInCompare = compareItems.some((item) => item.id === product.id);

  const handleToggleCompare = () => {
    if (isInCompare) {
      dispatch(toggleCompare(product));
      showToast(`${product.title} removed from comparison`);
    } else if (compareItems.length >= maxCompareItems) {
      showToast(`You can only compare up to ${maxCompareItems} products`);
    } else {
      dispatch(toggleCompare(product));
      showToast(`${product.title} added to comparison`);
    }
  };

  const handleAddToCart = () => {
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

  return (
    <div className={styles.productsList}>
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productRating}>
        <span className={styles.rate}>
          <FaStar className={styles.starIcon} /> {product.rating?.rate || "N/A"}
        </span>
        <span className={styles.count}>
          ({product.rating?.count || 0} reviews)
        </span>
      </div>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <div className={styles.productButtons}>
        <button type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
        <Link href={`/products/details/${product.id}`}>
          <button type="button">See More</button>
        </Link>
        <button
          type="button"
          onClick={handleToggleCompare}
          className={styles.compareBtn}
          title={isInCompare ? "Remove from compare" : "Add to compare"}
        >
          <FaBalanceScale
            style={{ color: isInCompare ? "#007bff" : "inherit" }}
          />
        </button>
      </div>
    </div>
  );
}
export default ProductsList;
