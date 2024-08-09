import { create } from "zustand";
import CartItem from "./entities/CartItem";
import Product from "./entities/Product";

interface CartStore {
  cart: CartItem[];
  isCartOpen: boolean;
  setCartOpen: () => void;
  addItem: (product: Product, count: number) => void;
  removeItem: (product: Product) => void;
  increaseCount: (product: Product) => void;
  decreaseCount: (product: Product) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  isCartOpen: false,
  setCartOpen: () => set(store => ({cart:[...store.cart], isCartOpen: !store.isCartOpen})),
  addItem: (product, count) =>
    set((store) => {
      if (store.cart.find(item => item.product == product)) {
        return ({ cart: store.cart.map((item) => {
          if (item.product.id == product.id) {
            item.count = count;
          }
          return item;
        }), isCartOpen: store.isCartOpen })}
      else {
          return ({ cart: [...store.cart, { product: product, count: count }], isCartOpen: store.isCartOpen })
        }
      }
    ),
  removeItem: (product) =>
    set((store) => ({
      cart: store.cart.filter((item) => item.product.id !== product.id),
      isCartOpen: store.isCartOpen
    })),
  increaseCount: (product) =>
    set((store) => ({
      cart: store.cart.map((item) => {
        if (item.product.id == product.id) {
          item.count++;
        }
        return item;
      }),
      isCartOpen: store.isCartOpen
    })),
  decreaseCount: (product) =>
    set((store) => ({
      cart: store.cart.map((item) => {
        if (item.product.id == product.id && item.count > 1) {
          item.count--;
        }
        return item;
      }),
      isCartOpen: store.isCartOpen
    })),
}));

export default useCartStore;