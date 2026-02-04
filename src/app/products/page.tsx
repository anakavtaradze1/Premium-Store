"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import ProductsList from "@/components/productsList/productsList";

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

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchProducts();
  }, []);

  if (error) throw error;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductsList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
