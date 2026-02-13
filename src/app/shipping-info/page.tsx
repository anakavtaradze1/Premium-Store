import {
  FaTruck,
  FaPlane,
  FaRocket,
  FaCheck,
  FaBox,
  FaShippingFast,
  FaMapMarkerAlt,
  FaHome,
  FaInfoCircle,
  FaGlobe,
} from "react-icons/fa";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Info",
};

const shippingOptions = [
  {
    icon: <FaTruck />,
    title: "Standard Shipping",
    price: "$4.99",
    color: "#10b981",
    details: [
      "5-7 business days delivery",
      "Full tracking included",
      "Free on orders over $50",
      "Available nationwide",
    ],
  },
  {
    icon: <FaPlane />,
    title: "Express Shipping",
    price: "$12.99",
    color: "#3b82f6",
    popular: true,
    details: [
      "2-3 business days delivery",
      "Priority handling",
      "Real-time tracking",
      "Signature required",
    ],
  },
  {
    icon: <FaRocket />,
    title: "Next Day Delivery",
    price: "$24.99",
    color: "#8b5cf6",
    details: [
      "Next business day delivery",
      "Order by 2 PM local time",
      "Premium handling",
      "Available in select areas",
    ],
  },
];

const deliveryZones = [
  {
    zone: "Zone 1 - Local",
    standard: "3-5 days",
    express: "1-2 days",
    nextDay: "Available",
  },
  {
    zone: "Zone 2 - Regional",
    standard: "5-7 days",
    express: "2-3 days",
    nextDay: "Available",
  },
  {
    zone: "Zone 3 - National",
    standard: "7-10 days",
    express: "3-4 days",
    nextDay: "Limited",
  },
  {
    zone: "Zone 4 - International",
    standard: "10-15 days",
    express: "5-7 days",
    nextDay: "N/A",
  },
];

const trackingSteps = [
  { icon: <FaBox />, title: "Order Placed" },
  { icon: <FaShippingFast />, title: "Shipped" },
  { icon: <FaMapMarkerAlt />, title: "In Transit" },
  { icon: <FaHome />, title: "Delivered" },
];

const policies = [
  {
    icon: <FaInfoCircle />,
    title: "Shipping Cutoff Times",
    text: "Orders placed before 2 PM local time on business days will be processed the same day. Orders placed after this time will be processed the next business day.",
  },
  {
    icon: <FaGlobe />,
    title: "International Shipping",
    text: "We ship to over 100 countries worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.",
  },
  {
    icon: <FaBox />,
    title: "Package Protection",
    text: "All packages are carefully packed and insured. If your package arrives damaged, please contact us within 48 hours with photos for a replacement or refund.",
  },
];

export default function ShippingInfoPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Shipping</span> Information
          </h1>
          <p className={styles.heroDescription}>
            Fast, reliable delivery to your doorstep. Choose the shipping option
            that works best for you.
          </p>
        </div>
      </section>

      <section className={styles.shippingOptions}>
        <h2 className={styles.sectionTitle}>Shipping Options</h2>
        <div className={styles.optionsGrid}>
          {shippingOptions.map((option, index) => (
            <div
              key={index}
              className={`${styles.optionCard} ${option.popular ? styles.popular : ""}`}
            >
              <div
                className={styles.optionIcon}
                style={{ background: option.color }}
              >
                {option.icon}
              </div>
              <h3 className={styles.optionTitle}>{option.title}</h3>
              <p className={styles.optionPrice}>{option.price}</p>
              <ul className={styles.optionDetails}>
                {option.details.map((detail, i) => (
                  <li key={i}>
                    <FaCheck /> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.deliveryZones}>
        <div className={styles.zonesContainer}>
          <h2 className={styles.sectionTitle}>Delivery Timeframes</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.zoneTable}>
              <thead>
                <tr>
                  <th>Delivery Zone</th>
                  <th>Standard</th>
                  <th>Express</th>
                  <th>Next Day</th>
                </tr>
              </thead>
              <tbody>
                {deliveryZones.map((zone, index) => (
                  <tr key={index}>
                    <td>{zone.zone}</td>
                    <td>{zone.standard}</td>
                    <td>{zone.express}</td>
                    <td>{zone.nextDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.tracking}>
        <h2 className={styles.sectionTitle}>Track Your Order</h2>
        <div className={styles.trackingSteps}>
          {trackingSteps.map((step, index) => (
            <div key={index} className={styles.trackingStep}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <span className={styles.stepTitle}>{step.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.policies}>
        <div className={styles.policiesContainer}>
          <h2 className={styles.sectionTitle}>Shipping Policies</h2>
          {policies.map((policy, index) => (
            <div key={index} className={styles.policyItem}>
              <h3 className={styles.policyTitle}>
                {policy.icon} {policy.title}
              </h3>
              <p className={styles.policyText}>{policy.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
