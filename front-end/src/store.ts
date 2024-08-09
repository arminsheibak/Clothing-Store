import { create } from "zustand";
import CartItem from "./entities/CartItem";
import Product from "./entities/Product";

interface CartStore {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  increaseCount: (product: Product) => void;
  decreaseCount: (product: Product) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addItem: (product) =>
    set((store) => ({ cart: [...store.cart, { product: product, count: 1 }] })),
  removeItem: (product) =>
    set((store) => ({
      cart: store.cart.filter((item) => item.product.id !== product.id),
    })),
  increaseCount: (product) =>
    set((store) => ({
      cart: store.cart.map((item) => {
        if (item.product.id == product.id) {
          item.count++;
        }
        return item;
      }),
    })),
  decreaseCount: (product) =>
    set((store) => ({
      cart: store.cart.map((item) => {
        if (item.product.id == product.id && item.count > 1) {
          item.count--;
        }
        return item;
      }),
    })),
}));

export default useCartStore;