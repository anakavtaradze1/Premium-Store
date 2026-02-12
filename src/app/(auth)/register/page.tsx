"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import type { User } from "@/lib/types";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

type RegisterFormInputs = Yup.InferType<typeof validationSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Register";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const users: User[] = await response.json();

      const existingUser = users.find(
        (u: User) => u.email.toLowerCase() === data.email.toLowerCase(),
      );

      if (existingUser) {
        setErrorMessage("Email already registered. Please login instead.");
        return;
      }

      const newUserData = {
        email: data.email,
        password: data.password,
        username: data.email.split("@")[0],
      };

      const createResponse = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create user");
      }

      const newUser = await createResponse.json();

      const completeUserData = {
        ...newUser,
        email: data.email,
        password: data.password,
        username: data.email.split("@")[0],
      };

      localStorage.setItem("currentUser", JSON.stringify(completeUserData));

      setSuccessMessage("Registration successful! You can now log in.");
      reset();
      setTimeout(() => router.push("/products"), 1500);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.";
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Register</h1>

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

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ""}`}
            />
            {errors.confirmPassword && (
              <span className={styles.errorText}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className={styles.switchAuth}>
          Already have an account?{" "}
          <Link href="/login" className={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
