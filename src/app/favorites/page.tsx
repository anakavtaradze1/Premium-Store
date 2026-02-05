"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleFavorite, clearFavorites } from "@/lib/slices/favoritesSlice";
import { addToCart } from "@/lib/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

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

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const handleRemoveFavorite = (product: Product) => {
    dispatch(toggleFavorite(product));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      }),
    );
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.emptyFavorites}>
        <FaHeart className={styles.emptyIcon} />
        <h2>Your favorites list is empty</h2>
        <p>Start adding products you love!</p>
        <Link href="/products">
          <button className={styles.browseBtn}>Browse Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Favorites</h1>
        <button onClick={handleClearFavorites} className={styles.clearBtn}>
          Clear All
        </button>
      </div>

      <div className={styles.favoritesGrid}>
        {favorites.map((product) => (
          <div key={product.id} className={styles.favoriteCard}>
            <button
              onClick={() => handleRemoveFavorite(product)}
              className={styles.removeBtn}
            >
              <FaHeart className={styles.heartIcon} />
            </button>

            <Link href={`/products/details/${product.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className={styles.productImage}
                />
              </div>
            </Link>

            <div className={styles.cardContent}>
              <Link href={`/products/details/${product.id}`}>
                <h3 className={styles.productTitle}>{product.title}</h3>
              </Link>

              <p className={styles.productDescription}>{product.description}</p>

              <div className={styles.rating}>
                <FaStar className={styles.starIcon} />
                <span>{product.rating.rate}</span>
                <span className={styles.reviewCount}>
                  ({product.rating.count} reviews)
                </span>
              </div>

              <div className={styles.cardFooter}>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={styles.addToCartBtn}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
