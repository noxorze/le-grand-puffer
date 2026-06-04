"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (
    product: Omit<CartItem, "quantity">
  ) => void;

  removeFromCart: (
    id: string,
    flavor: string
  ) => void;

  increaseQuantity: (
    id: string,
    flavor: string
  ) => void;

  decreaseQuantity: (
    id: string,
    flavor: string
  ) => void;

  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>(
    []
  );

  const addToCart = (
    product: Omit<CartItem, "quantity">
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.flavor === product.flavor
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.flavor === product.flavor
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (
    id: string,
    flavor: string
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.flavor === flavor
          )
      )
    );
  };

  const increaseQuantity = (
    id: string,
    flavor: string
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.flavor === flavor
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: string,
    flavor: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.flavor === flavor
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}