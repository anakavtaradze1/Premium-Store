"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaHeart, FaFire } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { toggleFavorite } from "@/lib/slices/favoritesSlice";
import type { Product } from "@/lib/types";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector((state) => state.favorites.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        const featured = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 4);
        setProducts(featured);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const handleToggleFavorite = (product: Product) => {
    dispatch(toggleFavorite(product));
  };

  const isFavorite = (productId: number) => {
    return favoriteItems.some((item) => item.id === productId);
  };

  if (loading) {
    return (
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>
          <FaFire className={styles.titleIcon} /> Trending Products
        </h2>
        <div className={styles.loadingGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.skeleton}></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.featured}>
      <h2 className={styles.sectionTitle}>
        <FaFire className={styles.titleIcon} /> Trending Products
      </h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.badge}>Top Rated</div>
            <button
              className={`${styles.favoriteBtn} ${isFavorite(product.id) ? styles.favorited : ""}`}
              onClick={() => handleToggleFavorite(product)}
            >
              <FaHeart />
            </button>
            <Link href={`/products/details/${product.id}`}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.productImage}
                />
              </div>
            </Link>
            <div className={styles.productInfo}>
              <Link href={`/products/details/${product.id}`}>
                <h3 className={styles.productTitle}>{product.title}</h3>
              </Link>
              <div className={styles.ratingContainer}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(product.rating.rate)
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    />
                  ))}
                </div>
                <span className={styles.ratingText}>
                  {product.rating.rate} ({product.rating.count})
                </span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/products" className={styles.viewAllBtn}>
          View All Products
        </Link>
      </div>
    </section>
  );
}
