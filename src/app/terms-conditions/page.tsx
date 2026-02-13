import {
  FaFileContract,
  FaUserCheck,
  FaShoppingBag,
  FaCreditCard,
  FaTruck,
  FaUndo,
  FaBan,
  FaBalanceScale,
  FaGavel,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: <FaFileContract /> },
  { id: "eligibility", title: "Eligibility", icon: <FaUserCheck /> },
  { id: "products", title: "Products & Services", icon: <FaShoppingBag /> },
  { id: "pricing", title: "Pricing & Payment", icon: <FaCreditCard /> },
  { id: "shipping", title: "Shipping & Delivery", icon: <FaTruck /> },
  { id: "returns", title: "Returns & Refunds", icon: <FaUndo /> },
  { id: "prohibited", title: "Prohibited Activities", icon: <FaBan /> },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: <FaBalanceScale />,
  },
  { id: "disputes", title: "Dispute Resolution", icon: <FaGavel /> },
  { id: "changes", title: "Changes to Terms", icon: <MdUpdate /> },
];

export default function TermsConditionsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Terms</span> & Conditions
          </h1>
          <p className={styles.heroDescription}>
            Please read these terms and conditions carefully before using our
            services. By accessing our website, you agree to be bound by these
            terms.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h2 className={styles.tocTitle}>Table of Contents</h2>
          <ul className={styles.tocList}>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <FaChevronRight /> {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section id="acceptance" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaFileContract /> Acceptance of Terms
          </h2>
          <div className={styles.sectionContent}>
            <p>
              By accessing or using our website and services, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these
              terms, you must not use our services.
            </p>
            <p>
              These terms apply to all visitors, users, and others who access or
              use our services, including but not limited to browsing,
              purchasing products, creating an account, or interacting with any
              features of our platform.
            </p>
          </div>
        </section>

        <section id="eligibility" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserCheck /> Eligibility
          </h2>
          <div className={styles.sectionContent}>
            <p>To use our services, you must:</p>
            <ul>
              <li>
                Be at least 18 years of age, or the age of majority in your
                jurisdiction
              </li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>
                Not be barred from receiving services under applicable law
              </li>
              <li>Provide accurate and complete registration information</li>
            </ul>
            <p>
              If you are using our services on behalf of an organization, you
              represent that you have authority to bind that organization to
              these terms.
            </p>
          </div>
        </section>

        <section id="products" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShoppingBag /> Products & Services
          </h2>
          <div className={styles.sectionContent}>
            <p>
              We make every effort to display our products as accurately as
              possible. However:
            </p>
            <ul>
              <li>
                Product images are for illustration purposes only and may differ
                from actual products
              </li>
              <li>Colors may vary depending on your device display settings</li>
              <li>
                Product descriptions are provided for informational purposes
              </li>
              <li>
                We reserve the right to limit quantities or discontinue products
                without notice
              </li>
            </ul>
            <div className={styles["highlight-box"]}>
              <p>
                <strong>Important:</strong> We reserve the right to refuse or
                cancel any order for any reason, including but not limited to
                product availability, errors in product or pricing information,
                or suspected fraudulent activity.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCreditCard /> Pricing & Payment
          </h2>
          <div className={styles.sectionContent}>
            <p>Regarding pricing and payment:</p>
            <ul>
              <li>
                All prices are displayed in USD unless otherwise specified
              </li>
              <li>Prices are subject to change without notice</li>
              <li>
                We are not responsible for pricing errors and reserve the right
                to cancel orders resulting from such errors
              </li>
              <li>Sales tax will be applied where required by law</li>
              <li>Payment must be received before order processing</li>
            </ul>
            <p>
              We accept various payment methods as outlined on our Payment
              Methods page. By providing payment information, you represent that
              you are authorized to use the payment method.
            </p>
          </div>
        </section>

        <section id="shipping" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaTruck /> Shipping & Delivery
          </h2>
          <div className={styles.sectionContent}>
            <p>Shipping and delivery terms:</p>
            <ul>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>
                Risk of loss transfers to you upon delivery to the carrier
              </li>
              <li>
                You are responsible for providing accurate shipping information
              </li>
              <li>
                Additional fees may apply for certain delivery locations or
                services
              </li>
              <li>
                We are not liable for delays caused by carriers, customs, or
                circumstances beyond our control
              </li>
            </ul>
            <p>
              For detailed shipping information, please refer to our Shipping
              Info page.
            </p>
          </div>
        </section>

        <section id="returns" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUndo /> Returns & Refunds
          </h2>
          <div className={styles.sectionContent}>
            <p>Our return policy:</p>
            <ul>
              <li>Items may be returned within 30 days of delivery</li>
              <li>
                Products must be unused, unworn, and in original packaging
              </li>
              <li>
                Certain items (e.g., personalized products, intimate items) are
                non-returnable
              </li>
              <li>
                Return shipping costs are the customer&apos;s responsibility
                unless the item is defective
              </li>
              <li>
                Refunds will be processed within 5-10 business days of receiving
                the return
              </li>
            </ul>
            <div className={styles.infoBox}>
              <h4>Defective or Damaged Items</h4>
              <p>
                If you receive a defective or damaged item, please contact us
                within 48 hours of delivery. We will arrange for a replacement
                or full refund, including shipping costs.
              </p>
            </div>
          </div>
        </section>

        <section id="prohibited" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBan /> Prohibited Activities
          </h2>
          <div className={styles.sectionContent}>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>
                Engage in fraudulent activities or provide false information
              </li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Use automated systems to collect data without permission</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
            <p>
              Violation of these prohibitions may result in termination of your
              account and legal action.
            </p>
          </div>
        </section>

        <section id="liability" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBalanceScale /> Limitation of Liability
          </h2>
          <div className={styles.sectionContent}>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>
                Our services are provided &quot;as is&quot; without warranties
                of any kind
              </li>
              <li>
                We are not liable for indirect, incidental, or consequential
                damages
              </li>
              <li>
                Our total liability shall not exceed the amount paid for the
                specific product or service
              </li>
              <li>We do not guarantee uninterrupted or error-free service</li>
            </ul>
            <p>
              Some jurisdictions do not allow limitations on implied warranties
              or exclusion of certain damages. In such cases, limitations apply
              to the extent permitted by law.
            </p>
          </div>
        </section>

        <section id="disputes" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGavel /> Dispute Resolution
          </h2>
          <div className={styles.sectionContent}>
            <p>In the event of a dispute:</p>
            <ol>
              <li>
                <strong>Informal Resolution:</strong> We encourage you to
                contact us first to resolve any issues informally.
              </li>
              <li>
                <strong>Mediation:</strong> If informal resolution fails,
                disputes may be submitted to mediation.
              </li>
              <li>
                <strong>Arbitration:</strong> Any unresolved disputes shall be
                settled by binding arbitration in accordance with applicable
                arbitration rules.
              </li>
              <li>
                <strong>Governing Law:</strong> These terms are governed by the
                laws of the State of New York, USA.
              </li>
            </ol>
            <p>
              You agree to waive any right to participate in class action
              lawsuits against us.
            </p>
          </div>
        </section>

        <section id="changes" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <MdUpdate /> Changes to Terms
          </h2>
          <div className={styles.sectionContent}>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website. Your
              continued use of our services after changes constitutes acceptance
              of the modified terms.
            </p>
            <p>
              We will make reasonable efforts to notify users of material
              changes through email or website notices. We recommend reviewing
              these terms periodically.
            </p>
          </div>
        </section>

        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Questions About Our Terms?</h3>
          <p className={styles.contactEmail}>
            <FaEnvelope /> legal@myshop.com
          </p>
        </div>
      </div>
    </main>
  );
}
