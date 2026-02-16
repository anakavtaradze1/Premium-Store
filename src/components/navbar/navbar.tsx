"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import styles from "./navbar.module.css";
import { useAppSelector } from "@/lib/hooks";

export function Navbar() {
  const pathname = usePathname();
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const favoritesCount = useAppSelector(
    (state) => state.favorites.items.length,
  );

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
            >
              <AiOutlineHome className={styles.navIcon} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`${styles.navLink} ${isActive("/products") ? styles.active : ""}`}
            >
              <MdStorefront className={styles.navIcon} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`${styles.navLink} ${isActive("/cart") ? styles.active : ""}`}
            >
              <div className={styles.cartIconWrapper}>
                <AiOutlineShoppingCart className={styles.navIcon} />
                {cartTotalQuantity > 0 && (
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
            >
              <div className={styles.cartIconWrapper}>
                <AiOutlineHeart className={styles.navIcon} />
                {favoritesCount > 0 && (
                  <span className={styles.cartBadge}>{favoritesCount}</span>
                )}
              </div>
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}
            >
              <AiOutlineInfoCircle className={styles.navIcon} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`${styles.navLink} ${isActive("/profile") ? styles.active : ""}`}
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
