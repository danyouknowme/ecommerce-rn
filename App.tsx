import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Home, Product, Cart, Auth, Login, Register } from "./pages";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
}
