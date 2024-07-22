import React from "react";
import { Slot } from "expo-router";
import CartProvider from "../Providers/CartProvider";
import { Text } from "react-native";
import Cart from "../components/Cart";

const RootLayout = () => {
  return (
    <CartProvider>
      <Slot />
      <Cart />
    </CartProvider>
  );
};

export default RootLayout;
