import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import { MdSecurity, MdVerifiedUser } from "react-icons/md";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Methods",
};

const paymentMethods = [
  {
    icon: <FaCcVisa style={{ color: "#1a1f71" }} />,
    title: "Visa",
    description:
      "Accept all Visa credit and debit cards for secure transactions worldwide.",
  },
  {
    icon: <FaCcMastercard style={{ color: "#eb001b" }} />,
    title: "Mastercard",
    description:
      "Full support for Mastercard credit and debit cards with instant processing.",
  },
  {
    icon: <FaCcAmex style={{ color: "#006fcf" }} />,
    title: "American Express",
    description: "Premium payment processing for American Express cardholders.",
  },
  {
    icon: <FaCcPaypal style={{ color: "#003087" }} />,
    title: "PayPal",
    description:
      "Fast and secure checkout with your PayPal account balance or linked cards.",
  },
  {
    icon: <FaApplePay style={{ color: "#000000" }} />,
    title: "Apple Pay",
    description:
      "Quick and secure payments using Touch ID or Face ID on Apple devices.",
  },
  {
    icon: <FaGooglePay style={{ color: "#4285f4" }} />,
    title: "Google Pay",
    description:
      "Simple, secure checkout with your saved Google account payment methods.",
  },
];

const securityFeatures = [
  {
    icon: <FaLock />,
    title: "256-bit SSL Encryption",
    description:
      "All transactions are protected with bank-level encryption technology.",
  },
  {
    icon: <MdSecurity />,
    title: "PCI DSS Compliant",
    description:
      "We meet the highest security standards for payment card processing.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Fraud Protection",
    description:
      "Advanced fraud detection systems monitor all transactions 24/7.",
  },
  {
    icon: <MdVerifiedUser />,
    title: "3D Secure",
    description:
      "Additional authentication layer for extra protection on card payments.",
  },
];

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

const faqs = [
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-leading 256-bit SSL encryption and are PCI DSS compliant. Your payment information is never stored on our servers.",
  },
  {
    question: "When will my card be charged?",
    answer:
      "Your card is charged immediately when you place your order. For pre-orders, you'll be charged when the item ships.",
  },
  {
    question: "Can I save my payment method for future purchases?",
    answer:
      "Yes, you can securely save your payment methods in your account settings for faster checkout on future orders.",
  },
  {
    question: "What should I do if my payment is declined?",
    answer:
      "Please verify your card details are correct and that you have sufficient funds. If issues persist, contact your bank or try an alternative payment method.",
  },
];

export default function PaymentMethodsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Payment</span> Methods
          </h1>
          <p className={styles.heroDescription}>
            We offer a variety of secure payment options to make your shopping
            experience seamless and convenient.
          </p>
        </div>
      </section>

      <section className={styles.paymentMethods}>
        <h2 className={styles.sectionTitle}>Accepted Payment Methods</h2>
        <div className={styles.methodsGrid}>
          {paymentMethods.map((method, index) => (
            <div key={index} className={styles.methodCard}>
              <div className={styles.methodIcon}>{method.icon}</div>
              <h3 className={styles.methodTitle}>{method.title}</h3>
              <p className={styles.methodDescription}>{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.security}>
        <div className={styles.securityContainer}>
          <h2 className={styles.sectionTitle}>Your Security is Our Priority</h2>
          <div className={styles.securityGrid}>
            {securityFeatures.map((feature, index) => (
              <div key={index} className={styles.securityCard}>
                <div className={styles.securityIcon}>{feature.icon}</div>
                <h3 className={styles.securityTitle}>{feature.title}</h3>
                <p className={styles.securityText}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.currencies}>
        <h2 className={styles.sectionTitle}>Supported Currencies</h2>
        <div className={styles.currencyList}>
          {currencies.map((currency, index) => (
            <div key={index} className={styles.currencyBadge}>
              <span>{currency.symbol}</span>
              {currency.code} - {currency.name}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle}>Payment FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion}>{faq.question}</div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
