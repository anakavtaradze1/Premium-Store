import {
  FaShoppingCart,
  FaTruck,
  FaCreditCard,
  FaUndo,
  FaUserCircle,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
};

const categories = [
  {
    icon: <FaShoppingCart />,
    title: "Orders & Purchases",
    description:
      "Track orders, modify purchases, and manage your order history.",
    color: "#3b82f6",
  },
  {
    icon: <FaTruck />,
    title: "Shipping & Delivery",
    description: "Delivery times, shipping options, and tracking information.",
    color: "#10b981",
  },
  {
    icon: <FaCreditCard />,
    title: "Payments & Billing",
    description: "Payment methods, invoices, and billing inquiries.",
    color: "#8b5cf6",
  },
  {
    icon: <FaUndo />,
    title: "Returns & Refunds",
    description: "Return policies, refund process, and exchange options.",
    color: "#f59e0b",
  },
  {
    icon: <FaUserCircle />,
    title: "Account Settings",
    description: "Manage your profile, password, and account preferences.",
    color: "#ec4899",
  },
  {
    icon: <FaQuestionCircle />,
    title: "General Questions",
    description: "Common questions about our products and services.",
    color: "#6366f1",
  },
];

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'Orders' section. You'll find real-time tracking information for all your active orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Visit our Returns & Refunds page for detailed information.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 day delivery. International shipping may take 10-15 business days.",
  },
  {
    question: "How can I change or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
  },
];

export default function HelpCenterPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            How can we <span className={styles.highlight}>help you?</span>
          </h1>
          <p className={styles.heroDescription}>
            Find answers to your questions, get support, and learn more about
            our products and services.
          </p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Browse by Category</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div
                className={styles.categoryIcon}
                style={{ background: category.color }}
              >
                {category.icon}
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDescription}>
                {category.description}
              </p>
              <span className={styles.categoryLink}>
                Learn more <FaChevronRight />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion}>{faq.question}</div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Still Need Help?</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaEnvelope />
            </div>
            <h3 className={styles.contactTitle}>Email Support</h3>
            <p className={styles.contactInfo}>support@myshop.com</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaPhone />
            </div>
            <h3 className={styles.contactTitle}>Phone Support</h3>
            <p className={styles.contactInfo}>+1 (555) 123-4567</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaComments />
            </div>
            <h3 className={styles.contactTitle}>Live Chat</h3>
            <p className={styles.contactInfo}>Available 24/7</p>
          </div>
        </div>
      </section>
    </main>
  );
}
