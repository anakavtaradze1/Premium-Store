"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { loadUserData, getCurrentUserId } from "../lib/utils/userDataStorage";
import { setCartState } from "../lib/slices/cartSlice";
import { setFavoritesState } from "../lib/slices/favoritesSlice";
import { UserDataSync } from "../components/UserDataSync/UserDataSync";

function createStoreWithUserData(): AppStore {
  const newStore = makeStore();

  if (typeof window !== "undefined") {
    const userId = getCurrentUserId();
    if (userId) {
      const userData = loadUserData(userId);
      if (userData) {
        newStore.dispatch(setCartState(userData.cart));
        newStore.dispatch(setFavoritesState(userData.favorites.items));
      }
    }
  }

  return newStore;
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => createStoreWithUserData());

  return (
    <Provider store={store}>
      <UserDataSync />
      {children}
    </Provider>
  );
}
