import React from "react";
import { NativeRouter, Navigate, Route, Routes } from "react-router-native";
import { Home, Product, Cart, Auth, Login, Register } from "./pages";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Router />
      </NativeRouter>
    </Provider>
  );
}

const Router = () => {
  const authUser = useSelector((state: any) => state.app.authUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={authUser ? <Cart /> : <Navigate to="/login" />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={!authUser ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
    </Routes>
  );
};
