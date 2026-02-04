"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import styles from "./navbar.module.css";

export function Navbar() {
  const pathname = usePathname();

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
              <AiOutlineShoppingCart className={styles.navIcon} />
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className={`${styles.navLink} ${isActive("/favorites") ? styles.active : ""}`}
            >
              <AiOutlineHeart className={styles.navIcon} />
              <span>Favorites</span>
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
