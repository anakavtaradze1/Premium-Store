import {
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaCookie,
  FaShareAlt,
  FaLock,
  FaChild,
  FaGlobe,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: <FaDatabase />,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: <FaUserShield />,
  },
  { id: "cookies", title: "Cookies & Tracking", icon: <FaCookie /> },
  { id: "sharing", title: "Information Sharing", icon: <FaShareAlt /> },
  { id: "security", title: "Data Security", icon: <FaLock /> },
  { id: "rights", title: "Your Rights", icon: <FaShieldAlt /> },
  { id: "children", title: "Children's Privacy", icon: <FaChild /> },
  { id: "international", title: "International Transfers", icon: <FaGlobe /> },
  { id: "updates", title: "Policy Updates", icon: <MdUpdate /> },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Privacy</span> Policy
          </h1>
          <p className={styles.heroDescription}>
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
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

        <section id="information-we-collect" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaDatabase /> Information We Collect
          </h2>
          <div className={styles.sectionContent}>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address,
                password, and phone number when you create an account.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details,
                billing address, and payment history (processed securely through
                our payment providers).
              </li>
              <li>
                <strong>Shipping Information:</strong> Delivery address and
                contact details for order fulfillment.
              </li>
              <li>
                <strong>Communications:</strong> Information you provide when
                contacting customer support or participating in surveys.
              </li>
            </ul>
            <p>
              We also automatically collect certain information when you use our
              services:
            </p>
            <ul>
              <li>
                Device information (browser type, operating system, device
                identifiers)
              </li>
              <li>Log data (IP address, access times, pages viewed)</li>
              <li>Location data (with your consent)</li>
              <li>Shopping behavior and preferences</li>
            </ul>
          </div>
        </section>

        <section id="how-we-use" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserShield /> How We Use Your Information
          </h2>
          <div className={styles.sectionContent}>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Personalize your shopping experience</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            <div className={styles["highlight-box"]}>
              <p>
                We will never sell your personal information to third parties
                for their marketing purposes.
              </p>
            </div>
          </div>
        </section>

        <section id="cookies" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCookie /> Cookies & Tracking
          </h2>
          <div className={styles.sectionContent}>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience:
            </p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential</td>
                  <td>Required for basic site functionality</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>Functional</td>
                  <td>Remember your preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Understand how visitors use our site</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Deliver relevant advertisements</td>
                  <td>90 days</td>
                </tr>
              </tbody>
            </table>
            <p>
              You can control cookies through your browser settings. Note that
              disabling certain cookies may affect site functionality.
            </p>
          </div>
        </section>

        <section id="sharing" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShareAlt /> Information Sharing
          </h2>
          <div className={styles.sectionContent}>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Companies that help us
                operate our business (payment processors, shipping carriers,
                email services)
              </li>
              <li>
                <strong>Business Partners:</strong> Selected partners for joint
                promotions (with your consent)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
            </ul>
          </div>
        </section>

        <section id="security" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaLock /> Data Security
          </h2>
          <div className={styles.sectionContent}>
            <p>
              We implement robust security measures to protect your information:
            </p>
            <ul>
              <li>256-bit SSL encryption for all data transmissions</li>
              <li>PCI DSS compliance for payment processing</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee training on data protection</li>
              <li>Access controls and authentication protocols</li>
            </ul>
            <p>
              While we strive to protect your information, no method of
              transmission over the Internet is 100% secure.
            </p>
          </div>
        </section>

        <section id="rights" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShieldAlt /> Your Rights
          </h2>
          <div className={styles.sectionContent}>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a portable
                format
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Restrict Processing:</strong> Limit how we use your data
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@myshop.com.
            </p>
          </div>
        </section>

        <section id="children" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaChild /> Children&apos;s Privacy
          </h2>
          <div className={styles.sectionContent}>
            <p>
              Our services are not intended for children under 16 years of age.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </div>
        </section>

        <section id="international" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGlobe /> International Transfers
          </h2>
          <div className={styles.sectionContent}>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your data in accordance with this privacy policy and
              applicable laws.
            </p>
          </div>
        </section>

        <section id="updates" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <MdUpdate /> Policy Updates
          </h2>
          <div className={styles.sectionContent}>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the &quot;Last updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>
            Questions About Our Privacy Policy?
          </h3>
          <p className={styles.contactEmail}>
            <FaEnvelope /> privacy@myshop.com
          </p>
        </div>
      </div>
    </main>
  );
}
