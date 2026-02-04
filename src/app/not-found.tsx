import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
