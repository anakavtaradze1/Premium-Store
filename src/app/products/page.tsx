"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import ProductsList from "@/components/productsList/productsList";
import { FaFilter, FaTimes, FaSearch } from "react-icons/fa";
import type { Product } from "@/lib/types";

export default function Products() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("1000");
  const [minRating, setMinRating] = useState<number>(0);

  const effectiveCategory = categoryFromUrl || selectedCategory;

  useEffect(() => {
    document.title = "Products";
  }, []);

  const [sortBy, setSortBy] = useState<string>("default");
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (effectiveCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === effectiveCategory,
      );
    }

    const minPriceNum = Number(minPrice) || 0;
    const maxPriceNum = Number(maxPrice) || 1000;
    filtered = filtered.filter(
      (product) => product.price >= minPriceNum && product.price <= maxPriceNum,
    );

    filtered = filtered.filter(
      (product) => (product.rating?.rate || 0) >= minRating,
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [
    products,
    effectiveCategory,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
    searchQuery,
  ]);

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  if (error) throw error;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>

      <div className={styles.mainContent}>
        <aside
          className={`${styles.filterSidebar} ${!showFilters ? styles.hidden : ""}`}
        >
          <div className={styles.filterHeader}>
            <h2>
              <FaFilter /> Filters
            </h2>
            <button
              className={styles.toggleFilters}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles.filterSection}>
            <h3>Search Products</h3>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or description..."
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3>Category</h3>
            <select
              value={effectiveCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.select}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterSection}>
            <h3>Price Range</h3>
            <div className={styles.priceRange}>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className={styles.priceInput}
                placeholder="Min"
                min="0"
              />
              <span>to</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className={styles.priceInput}
                placeholder="Max"
                min="0"
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={styles.rangeSlider}
            />
          </div>

          <div className={styles.filterSection}>
            <h3>Minimum Rating</h3>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className={styles.select}
            >
              <option value="0">All Ratings</option>
              <option value="1">1+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
            </select>
          </div>
        </aside>

        <div className={styles.productsArea}>
          <div className={styles.topBar}>
            <button
              className={`${styles.toggleFiltersBtn} ${showFilters ? styles.hidden : ""}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter /> Show Filters
            </button>
            <div className={styles.resultsInfo}>
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className={styles.sortSection}>
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.select}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className={styles.productsList}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductsList key={product.id} product={product} />
              ))
            ) : (
              <div className={styles.noResults}>
                No products found matching your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
