import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import favoritesSlice from './slices/favoritesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        cart: cartSlice,
        favorites: favoritesSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']