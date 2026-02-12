import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { setCartState, clearCart } from "./slices/cartSlice";
import { setFavoritesState, clearFavorites } from "./slices/favoritesSlice";
import {
  loadUserData,
  saveUserData,
  getCurrentUserId,
} from "./utils/userDataStorage";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useUserData = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const favorites = useAppSelector((state) => state.favorites);

  const handleUserLogout = useCallback(() => {
    const userId = getCurrentUserId();
    if (userId) {
      saveUserData(userId, cart, favorites);
    }
    dispatch(clearCart());
    dispatch(clearFavorites());
  }, [dispatch, cart, favorites]);

  const handleUserLogin = useCallback(
    (userId: number) => {
      const userData = loadUserData(userId);
      if (userData) {
        dispatch(setCartState(userData.cart));
        dispatch(setFavoritesState(userData.favorites.items));
      } else {
        dispatch(clearCart());
        dispatch(clearFavorites());
      }
    },
    [dispatch],
  );

  return {
    handleUserLogout,
    handleUserLogin,
  };
};
