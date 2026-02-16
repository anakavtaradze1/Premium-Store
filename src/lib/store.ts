import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoritesSlice from "./slices/favoritesSlice";
import compareSlice from "./slices/compareSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      favorites: favoritesSlice,
      compare: compareSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
