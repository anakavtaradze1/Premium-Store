"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { useUserData } from "@/lib/hooks";
import type { User } from "@/lib/types";
import { loadUserProfile } from "@/lib/utils/userDataStorage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean().default(false),
});

type LoginFormInputs = Yup.InferType<typeof validationSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { handleUserLogin } = useUserData();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const users: User[] = await response.json();

      const user = users.find(
        (u: User) => u.email.toLowerCase() === data.email.toLowerCase(),
      );

      if (!user) {
        setErrorMessage("Invalid email or password.");
        return;
      }

      const savedProfile = loadUserProfile(user.id);
      const userDataToStore = {
        ...user,
        ...savedProfile,
        id: user.id,
        password: user.password,
        rememberMe: data.rememberMe || false,
      };

      localStorage.setItem("currentUser", JSON.stringify(userDataToStore));

      if (data.rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      handleUserLogin(user.id);

      setSuccessMessage("Login successful!");
      reset();
      setTimeout(() => router.push("/products"), 1500);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Login</h1>

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Enter your email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
            />
            {errors.password && (
              <span className={styles.errorText}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={styles.checkboxGroup}>
            <input
              {...register("rememberMe")}
              type="checkbox"
              id="rememberMe"
              className={styles.checkbox}
            />
            <label htmlFor="rememberMe" className={styles.checkboxLabel}>
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className={styles.switchAuth}>
          Don&apos;t have an account?{" "}
          <Link href="/register" className={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
