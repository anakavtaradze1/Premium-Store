import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product, FavoritesState } from "../types";

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(product);
      }
    },
    clearFavorites: (state) => {
      state.items = [];
    },
    setFavoritesState: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { toggleFavorite, clearFavorites, setFavoritesState } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
