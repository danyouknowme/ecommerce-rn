import { NativeRouter, Route, Routes } from 'react-router-native';
import { Home, Product, Cart } from './pages';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </NativeRouter>
  );
}
