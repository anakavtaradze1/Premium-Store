"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MdStorefront, MdCompareArrows, MdShoppingBag } from "react-icons/md";
import styles from "./navbar.module.css";
import { useAppSelector } from "@/lib/hooks";

const emptySubscribe = () => () => {};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const pathname = usePathname();
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const favoritesCount = useAppSelector(
    (state) => state.favorites.items.length,
  );
  const compareCount = useAppSelector((state) => state.compare.items.length);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <MdShoppingBag />
        </Link>

        <button
          className={styles.burgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {isMenuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <ul
          className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}
        >
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <AiOutlineHome className={styles.navIcon} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`${styles.navLink} ${isActive("/products") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <MdStorefront className={styles.navIcon} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`${styles.navLink} ${isActive("/cart") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <div className={styles.cartIconWrapper}>
                <AiOutlineShoppingCart className={styles.navIcon} />
                {isHydrated && cartTotalQuantity > 0 && (
                  <span className={styles.cartBadge}>{cartTotalQuantity}</span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className={`${styles.navLink} ${isActive("/favorites") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <div className={styles.cartIconWrapper}>
                <AiOutlineHeart className={styles.navIcon} />
                {isHydrated && favoritesCount > 0 && (
                  <span className={styles.cartBadge}>{favoritesCount}</span>
                )}
              </div>
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              href="/compare"
              className={`${styles.navLink} ${isActive("/compare") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <div className={styles.cartIconWrapper}>
                <MdCompareArrows className={styles.navIcon} />
                {isHydrated && compareCount > 0 && (
                  <span className={styles.cartBadge}>{compareCount}</span>
                )}
              </div>
              <span>Compare</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <AiOutlineInfoCircle className={styles.navIcon} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`${styles.navLink} ${isActive("/profile") ? styles.active : ""}`}
              onClick={handleLinkClick}
            >
              <AiOutlineUser className={styles.navIcon} />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
