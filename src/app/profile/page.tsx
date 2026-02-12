"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { useUserData } from "@/lib/hooks";
import { saveUserProfile } from "@/lib/utils/userDataStorage";
import type { UserProfile } from "@/lib/types";

interface EditFormData {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<EditFormData>({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    street: "",
    city: "",
    zipcode: "",
  });
  const { handleUserLogout } = useUserData();

  const initFormData = (userData: UserProfile): EditFormData => ({
    username: userData.username || "",
    email: userData.email || "",
    firstname: userData.name?.firstname || "",
    lastname: userData.name?.lastname || "",
    phone: userData.phone || "",
    street: userData.address?.street || "",
    city: userData.address?.city || "",
    zipcode: userData.address?.zipcode || "",
  });

  useEffect(() => {
    document.title = "Profile";
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");

    if (!userData) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData) as UserProfile;
      setUser(parsedUser);
      setFormData(initFormData(parsedUser));
    } catch {
      setErrorMessage("Failed to load profile data.");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    handleUserLogout();
    localStorage.removeItem("currentUser");
    router.push("/login");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEdit = () => {
    if (user) {
      setFormData(initFormData(user));
    }
    setIsEditing(false);
    setErrorMessage("");
  };

  const handleSaveProfile = () => {
    if (!user) return;

    if (!formData.username.trim() || !formData.email.trim()) {
      setErrorMessage("Username and email are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    try {
      const updatedUser: UserProfile = {
        ...user,
        username: formData.username.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        name:
          formData.firstname.trim() || formData.lastname.trim()
            ? {
                firstname: formData.firstname.trim(),
                lastname: formData.lastname.trim(),
              }
            : undefined,
        address:
          formData.street.trim() ||
          formData.city.trim() ||
          formData.zipcode.trim()
            ? {
                street: formData.street.trim(),
                city: formData.city.trim(),
                zipcode: formData.zipcode.trim(),
                geolocation: user.address?.geolocation || { lat: "", long: "" },
              }
            : undefined,
      };

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      saveUserProfile(user.id, updatedUser);
      setUser(updatedUser);
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch {
      setErrorMessage("Failed to save profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.loading}>Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.root}>
        <div className={styles.error}>No user data found.</div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              {user.username?.[0]?.toUpperCase() || "U"}
            </div>
            <div className={styles.userDetails}>
              <h1>{user.username}</h1>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className={styles.editBtn}
              >
                Edit Profile
              </button>
            )}
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Log out
            </button>
          </div>
        </div>

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        {isEditing ? (
          <>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Account</h3>
              <div className={styles.grid}>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="username">
                    Username *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Personal</h3>
              <div className={styles.grid}>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Contact</h3>
              <div className={styles.grid}>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Address</h3>
              <div className={styles.grid}>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="street">
                    Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldEdit}>
                  <label className={styles.label} htmlFor="zipcode">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                onClick={handleCancelEdit}
                className={styles.btn}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className={`${styles.btn} ${styles.btnPrimary}`}
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Account</h3>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <span className={styles.value}>{user.email}</span>
                </div>
                <div className={styles.field}>
                  <span className={styles.label}>Username</span>
                  <span className={styles.value}>{user.username}</span>
                </div>
              </div>
            </div>

            {user.name && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Personal</h3>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <span className={styles.label}>First Name</span>
                    <span className={styles.value}>{user.name.firstname}</span>
                  </div>
                  <div className={styles.field}>
                    <span className={styles.label}>Last Name</span>
                    <span className={styles.value}>{user.name.lastname}</span>
                  </div>
                </div>
              </div>
            )}

            {user.phone && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Contact</h3>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <span className={styles.label}>Phone</span>
                    <span className={styles.value}>{user.phone}</span>
                  </div>
                </div>
              </div>
            )}

            {user.address && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Address</h3>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <span className={styles.label}>Street</span>
                    <span className={styles.value}>{user.address.street}</span>
                  </div>
                  <div className={styles.field}>
                    <span className={styles.label}>City</span>
                    <span className={styles.value}>{user.address.city}</span>
                  </div>
                  <div className={styles.field}>
                    <span className={styles.label}>Postal Code</span>
                    <span className={styles.value}>{user.address.zipcode}</span>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.actions}>
              <Link href="/products" className={styles.btn}>
                Shop
              </Link>
              <Link
                href="/cart"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
