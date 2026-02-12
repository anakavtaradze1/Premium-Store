import type {
  CartState,
  FavoritesState,
  UserData,
  UserProfile,
} from "../types";

const USER_DATA_PREFIX = "userData_";
const USER_PROFILE_PREFIX = "userProfile_";

export const getCurrentUserId = (): number | null => {
  if (typeof window === "undefined") return null;

  const userData = localStorage.getItem("currentUser");
  if (!userData) return null;

  try {
    const user = JSON.parse(userData);
    return user.id || null;
  } catch {
    return null;
  }
};

const getUserStorageKey = (userId: number): string => {
  return `${USER_DATA_PREFIX}${userId}`;
};

export const saveUserData = (
  userId: number,
  cart: CartState,
  favorites: FavoritesState,
): void => {
  if (typeof window === "undefined") return;

  const userData: UserData = { cart, favorites };
  localStorage.setItem(getUserStorageKey(userId), JSON.stringify(userData));
};

export const loadUserData = (userId: number): UserData | null => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem(getUserStorageKey(userId));
  if (!data) return null;

  try {
    return JSON.parse(data) as UserData;
  } catch {
    return null;
  }
};

const getUserProfileKey = (userId: number): string => {
  return `${USER_PROFILE_PREFIX}${userId}`;
};

export const saveUserProfile = (
  userId: number,
  profile: Partial<UserProfile>,
): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(getUserProfileKey(userId), JSON.stringify(profile));
};

export const loadUserProfile = (
  userId: number,
): Partial<UserProfile> | null => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem(getUserProfileKey(userId));
  if (!data) return null;

  try {
    return JSON.parse(data) as Partial<UserProfile>;
  } catch {
    return null;
  }
};
