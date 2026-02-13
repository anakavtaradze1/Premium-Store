import styles from "./footer.module.css";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>About Us</h3>
            <p>
              Your trusted online shopping destination for quality products at
              amazing prices. We&apos;re committed to delivering excellence in
              every order.
            </p>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>123 Shopping Street, NY 10001</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>support@myshop.com</span>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/cart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/favorites">My Favorites</Link>
              </li>
              <li>
                <Link href = "/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Customer Service</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/help-center">Help Center</Link>
              </li>
              <li>
                <Link href="/shipping-info">Shipping Info</Link>
              </li>
              <li>
                <Link href="/payment-methods">Payment Methods</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to get special offers, free giveaways, and exclusive
              deals!
            </p>
            <div className={styles.newsletter}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>
                <FaPaperPlane />
              </button>
            </div>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
          <div className={styles.paymentMethods}>
            <span>We Accept:</span>
            <div className={styles.paymentIcons}>
              <FaCcVisa className={styles.paymentIcon} />
              <FaCcMastercard className={styles.paymentIcon} />
              <FaCcPaypal className={styles.paymentIcon} />
              <FaCcAmex className={styles.paymentIcon} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
