"use client";

import Link from "next/link";
import { FaTshirt, FaFemale, FaGem, FaMicrochip } from "react-icons/fa";
import styles from "./Categories.module.css";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: "men's clothing",
    name: "Men's Fashion",
    description: "Stylish apparel for modern men",
    icon: <FaTshirt />,
    color: "#3498db",
    gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
  },
  {
    id: "women's clothing",
    name: "Women's Fashion",
    description: "Elegant styles for every occasion",
    icon: <FaFemale />,
    color: "#e74c3c",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
  },
  {
    id: "jewelery",
    name: "Jewelry",
    description: "Exquisite pieces that shine",
    icon: <FaGem />,
    color: "#9b59b6",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest tech and gadgets",
    icon: <FaMicrochip />,
    color: "#2ecc71",
    gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
  },
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.sectionTitle}>Shop by Category</h2>
      <p className={styles.sectionDescription}>
        Browse our curated collections and find exactly what you&apos;re looking
        for!
      </p>
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${encodeURIComponent(category.id)}`}
            className={styles.categoryCard}
            style={{ "--gradient": category.gradient } as React.CSSProperties}
          >
            <div
              className={styles.iconWrapper}
              style={{ background: category.gradient }}
            >
              {category.icon}
            </div>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <p className={styles.categoryDescription}>{category.description}</p>
            <span className={styles.shopNow}>Shop Now →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
