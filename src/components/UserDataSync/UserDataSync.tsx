"use client";

import { useEffect, useRef } from "react";
import { useAppSelector } from "@/lib/hooks";
import { getCurrentUserId, saveUserData } from "@/lib/utils/userDataStorage";

export function UserDataSync() {
  const cart = useAppSelector((state) => state.cart);
  const favorites = useAppSelector((state) => state.favorites);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const userId = getCurrentUserId();
    if (userId) {
      saveUserData(userId, cart, favorites);
    }
  }, [cart, favorites]);

  return null;
}
