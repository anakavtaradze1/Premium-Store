"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar, FaHeart, FaShareAlt, FaCheck } from "react-icons/fa";
import styles from "./productDetails.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { toggleFavorite } from "@/lib/slices/favoritesSlice";
import { showToast } from "@/components/Toast/Toast";
import type { Product } from "@/lib/types";

function ProductDetails() {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        );
        const data: Product = await response.json();
        setProductDetails(data);
        document.title = data.title;
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error as Error);
      }
    };

    fetchProductDetails();
  }, [params.id]);

  const decreaseQuantity = (): void => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = (): void => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (productDetails) {
      for (let i = 0; i < quantity; i++) {
        dispatch(
          addToCart({
            id: productDetails.id,
            name: productDetails.title,
            price: productDetails.price,
            image: productDetails.image,
          }),
        );
      }
      showToast(`${productDetails.title} (x${quantity}) added to cart!`);
    }
  };

  const handleToggleFavorite = () => {
    if (productDetails) {
      const isFavorite = favorites.some(
        (item) => item.id === productDetails.id,
      );
      dispatch(toggleFavorite(productDetails));

      if (isFavorite) {
        showToast(`${productDetails.title} removed from favorites!`);
      } else {
        showToast(`${productDetails.title} added to favorites!`);
      }
    }
  };

  const isFavorite = productDetails
    ? favorites.some((item) => item.id === productDetails.id)
    : false;

  if (error) throw error;

  if (!productDetails) {
    return <div className={styles.error}>Product not found</div>;
  }

  const getProductFeatures = (product: Product): string[] => {
    const category = product.category.toLowerCase();

    if (category.includes("electronics")) {
      return [
        "Latest technology and features",
        "Manufacturer warranty included",
        "Fast shipping available",
      ];
    } else if (category.includes("jewelery") || category.includes("jewelry")) {
      return [
        "Authentic precious materials",
        "Comes with certificate of authenticity",
        "Beautiful gift packaging",
      ];
    } else if (
      category.includes("men's clothing") ||
      category.includes("women's clothing")
    ) {
      return [
        "Premium quality fabric",
        "Available in multiple sizes",
        "Easy returns within 30 days",
      ];
    } else {
      return [
        "High quality materials",
        "Satisfaction guaranteed",
        "Fast and secure delivery",
      ];
    }
  };

  const features = getProductFeatures(productDetails);

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageSection}>
        <div className={styles.mainImage}>
          <Image
            src={productDetails.image}
            width={400}
            height={400}
            alt={productDetails.title}
            className={styles.productImage}
          />
        </div>
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.title}>{productDetails.title}</h1>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(productDetails.rating.rate)
                    ? styles.starFilled
                    : styles.starEmpty
                }
              />
            ))}
          </div>
          <span className={styles.reviewCount}>
            ({productDetails.rating.count} Reviews)
          </span>
        </div>

        <div className={styles.price}>${productDetails.price}</div>

        <div className={styles.quantitySection}>
          <button onClick={decreaseQuantity} className={styles.quantityBtn}>
            −
          </button>
          <input
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={styles.quantityInput}
          />
          <button onClick={increaseQuantity} className={styles.quantityBtn}>
            +
          </button>
        </div>

        <div className={styles.actionButtons}>
          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            Add to Cart
          </button>
          <button onClick={handleToggleFavorite} className={styles.iconBtn}>
            <FaHeart style={{ color: isFavorite ? "#ff4444" : "inherit" }} />
          </button>
          <button className={styles.iconBtn}>
            <FaShareAlt />
          </button>
        </div>

        <div className={styles.features}>
          {features.map((feature: string, index: number) => (
            <div key={index} className={styles.feature}>
              <FaCheck className={styles.checkIcon} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className={styles.productDetailsSection}>
          <h2>Product Details</h2>
          <p>{productDetails.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
