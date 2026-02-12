import Link from "next/link";
import { MdStorefront, MdLocalShipping, MdSecurity } from "react-icons/md";
import {
  FaUsers,
  FaShoppingBag,
  FaAward,
  FaHeadset,
  FaMoneyBillWave,
  FaUndoAlt,
  FaGift,
} from "react-icons/fa";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to Our{" "}
            <span className={styles.highlight}>Premium Store</span>
          </h1>
          <p className={styles.heroDescription}>
            Discover amazing products at unbeatable prices. Quality, style and
            convenience all in one place.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/products" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link href="/products" className={styles.secondaryBtn}>
              View Collection
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <FaUsers className={styles.statIcon} />
            <h3 className={styles.statNumber}>10K+</h3>
            <p className={styles.statLabel}>Happy Customers</p>
          </div>
          <div className={styles.statCard}>
            <FaShoppingBag className={styles.statIcon} />
            <h3 className={styles.statNumber}>500+</h3>
            <p className={styles.statLabel}>Products Available</p>
          </div>
          <div className={styles.statCard}>
            <FaHeadset className={styles.statIcon} />
            <h3 className={styles.statNumber}>24/7</h3>
            <p className={styles.statLabel}>Customer Support</p>
          </div>
          <div className={styles.statCard}>
            <FaAward className={styles.statIcon} />
            <h3 className={styles.statNumber}>100%</h3>
            <p className={styles.statLabel}>Quality Guarantee</p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <MdStorefront />
            </div>
            <h3 className={styles.featureTitle}>Quality Products</h3>
            <p className={styles.featureDescription}>
              Carefully curated selection of premium items for every need
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <MdLocalShipping />
            </div>
            <h3 className={styles.featureTitle}>Fast Delivery</h3>
            <p className={styles.featureDescription}>
              Quick and reliable shipping to your doorstep
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <MdSecurity />
            </div>
            <h3 className={styles.featureTitle}>Secure Payment</h3>
            <p className={styles.featureDescription}>
              Safe and encrypted transactions for peace of mind
            </p>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Shopping Benefits</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <FaMoneyBillWave className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Best Prices</h3>
            <p className={styles.benefitDescription}>
              Competitive pricing on all products with regular discounts and
              special offers
            </p>
          </div>
          <div className={styles.benefitCard}>
            <FaUndoAlt className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Easy Returns</h3>
            <p className={styles.benefitDescription}>
              30-day hassle-free return policy for your complete peace of mind
            </p>
          </div>
          <div className={styles.benefitCard}>
            <FaGift className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Gift Wrapping</h3>
            <p className={styles.benefitDescription}>
              Free gift wrapping service available on all orders
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start Shopping?</h2>
          <p className={styles.ctaDescription}>
            Explore our extensive collection and find exactly what you&apos;re
            looking for!
          </p>
          <Link href="/products" className={styles.ctaBtn}>
            Browse Products
          </Link>
        </div>
      </section>
    </>
  );
}
