import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types";

export interface CompareState {
  items: Product[];
  maxItems: number;
}

const initialState: CompareState = {
  items: [],
  maxItems: 4,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex === -1 && state.items.length < state.maxItems) {
        state.items.push(product);
      }
    },
    removeFromCompare: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCompare: (state) => {
      state.items = [];
    },
    toggleCompare: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else if (state.items.length < state.maxItems) {
        state.items.push(product);
      }
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare, toggleCompare } =
  compareSlice.actions;
export default compareSlice.reducer;
