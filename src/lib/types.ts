export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FavoritesState {
  items: Product[];
}

export interface UserData {
  cart: CartState;
  favorites: FavoritesState;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  [key: string]: unknown;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export interface UserProfile {
  id: number;
  email: string;
  username: string;
  password: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: Address;
  phone?: string;
}
