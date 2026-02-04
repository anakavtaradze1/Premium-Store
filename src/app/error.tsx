"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops!</h1>
        <h2 className={styles.subtitle}>Something went wrong</h2>
        <p className={styles.description}>
          An unexpected error occurred. Please try again.
        </p>
        <button onClick={reset} className={styles.retryButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}
