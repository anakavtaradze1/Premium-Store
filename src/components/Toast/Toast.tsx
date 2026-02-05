"use client";

import { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { FaCheckCircle } from "react-icons/fa";

let showToastCallback: ((message: string) => void) | null = null;

export function showToast(message: string) {
  if (showToastCallback) {
    showToastCallback(message);
  }
}

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    showToastCallback = (msg: string) => {
      setMessage(msg);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    return () => {
      showToastCallback = null;
    };
  }, []);

  return (
    <>
      {visible && (
        <div className={styles.toast}>
          <FaCheckCircle className={styles.icon} />
          <span>{message}</span>
        </div>
      )}
    </>
  );
}
