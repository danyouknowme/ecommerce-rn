import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Home, Product, Cart } from './pages';
import { Provider } from 'react-redux';
import { store } from './app/store';

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NativeRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </NativeRouter>
      </Provider>
    </React.StrictMode>
  );
}
