import Link from "next/link";
import {
  FaHeart,
  FaRocket,
  FaLeaf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  MdSecurity,
  MdGroups,
  MdWorkspaces,
  MdTrendingUp,
} from "react-icons/md";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const values = [
  {
    icon: <FaHeart />,
    title: "Customer First",
    description:
      "Every decision we make starts with how it improves our customers' experience.",
    color: "#ec4899",
  },
  {
    icon: <MdSecurity />,
    title: "Trust & Security",
    description:
      "We protect your data and transactions with enterprise-grade security.",
    color: "#3b82f6",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices and sustainable sourcing.",
    color: "#10b981",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    description:
      "Constantly evolving to bring you the latest and greatest products.",
    color: "#f59e0b",
  },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started as a small online store with just 50 products",
    icon: <MdWorkspaces />,
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description: "Expanded to 500+ products and 10 000 customers",
    icon: <MdTrendingUp />,
  },
  {
    year: "2024",
    title: "Going Global",
    description: "Launched international shipping to 50+ countries",
    icon: <FaRocket />,
  },
  {
    year: "2025",
    title: "Industry Leader",
    description: "Recognized as a top e-commerce platform with 10K+ customers",
    icon: <MdGroups />,
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping delivers within 2-3 business days. Free express shipping on orders over $50!",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy. If you're not satisfied with your purchase, simply return it in original condition for a full refund.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email with tracking information. You can also track your order in your account dashboard.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers in select countries.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After that, please contact our support team and we'll do our best to assist you.",
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email Us",
    value: "support@premiumstore.com",
    link: "mailto:support@premiumstore.com",
  },
  {
    icon: <FaPhone />,
    label: "Call Us",
    value: "+1 (800) 123-4567",
    link: "tel:+18001234567",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Visit Us",
    value: "123 Commerce St, NY 10001",
    link: "#",
  },
  {
    icon: <FaClock />,
    label: "Working Hours",
    value: "Mon-Fri: 9AM - 8PM EST",
    link: "#",
  },
];

export default function About() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.highlight}>Story</span>
          </h1>
          <p className={styles.heroDescription}>
            We started with a simple mission: make quality products accessible
            to everyone. Today, we&apos;re proud to serve millions of happy
            customers worldwide.
          </p>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          To revolutionize online shopping by combining cutting-edge technology
          with exceptional customer service. We believe everyone deserves access
          to quality products at fair prices, delivered with care and speed.
        </p>
      </section>

      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div
                className={styles.valueIcon}
                style={{ backgroundColor: value.color }}
              >
                {value.icon}
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.timelineIcon}>{item.icon}</div>
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.contactSubtitle}>
          Have questions? We&apos;d love to hear from you!
        </p>
        <div className={styles.contactGrid}>
          {contactInfo.map((info, index) => (
            <a key={index} href={info.link} className={styles.contactCard}>
              <div className={styles.contactIcon}>{info.icon}</div>
              <span className={styles.contactLabel}>{info.label}</span>
              <span className={styles.contactValue}>{info.value}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Experience the Difference?
          </h2>
          <p className={styles.ctaDescription}>
            Join millions of satisfied customers and discover why we&apos;re the
            preferred choice for online shopping.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/products" className={styles.ctaPrimary}>
              Start Shopping
            </Link>
            <Link href="/register" className={styles.ctaSecondary}>
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
