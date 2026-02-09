"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

interface Address {
  street: string;
  city: string;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

interface UserProfile {
  id: number;
  email: string;
  username: string;
  password: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: Address;
  phone?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");

    if (!userData) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData) as UserProfile;
      setUser(parsedUser);
    } catch {
      setErrorMessage("Failed to load profile data.");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.loading}>Loading profile...</div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className={styles.root}>
        <div className={styles.error}>{errorMessage}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.root}>
        <div className={styles.error}>No user data found.</div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              {user.username?.[0]?.toUpperCase() || "U"}
            </div>
            <div className={styles.userDetails}>
              <h1>{user.username}</h1>
              <p>{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log out
          </button>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Account</h3>
          <div className={styles.grid}>
            <div className={styles.field}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Username</span>
              <span className={styles.value}>{user.username}</span>
            </div>
          </div>
        </div>

        {user.name && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Personal</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <span className={styles.label}>First Name</span>
                <span className={styles.value}>{user.name.firstname}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Last Name</span>
                <span className={styles.value}>{user.name.lastname}</span>
              </div>
            </div>
          </div>
        )}

        {user.phone && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{user.phone}</span>
              </div>
            </div>
          </div>
        )}

        {user.address && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Address</h3>
            <div className={styles.grid}>
              <div className={styles.field}>
                <span className={styles.label}>Street</span>
                <span className={styles.value}>{user.address.street}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>City</span>
                <span className={styles.value}>{user.address.city}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Postal Code</span>
                <span className={styles.value}>{user.address.zipcode}</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <Link href="/products" className={styles.btn}>
            Shop
          </Link>
          <Link href="/cart" className={`${styles.btn} ${styles.btnPrimary}`}>
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
