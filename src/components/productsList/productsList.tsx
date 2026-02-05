"use client";

import Image from "next/image";
import styles from "./productsList.module.css";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { showToast } from "@/components/Toast/Toast";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface ProductsListProps {
  product: Product;
}

function ProductsList({ product }: ProductsListProps) {
  const dispatch = useAppDispatch();

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
        <button onClick={handleAddToCart}>Add to cart</button>
        <Link href={`/products/details/${product.id}`}>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
}
export default ProductsList;
