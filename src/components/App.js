import { lazy } from 'react';
import { CartProvider } from '../CartContext';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';
import Cart from 'pages/Cart';
import { getShops } from 'services/Api';
import WelcomeCaption from './WelcomeCaption';
const Shop = lazy(() => import('../pages/Shop'));
const Products = lazy(() => import('./Products'));

export const App = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(setShops);
  }, []);

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="shop" />} />
            <Route path="shop" element={<Shop />}>
              <Route index element={<WelcomeCaption />} />
              {shops.map(({ text, href }) => (
                <Route key={text} path={href} element={<Products />} />
              ))}
            </Route>
            <Route path="shoping_cart" element={<Cart />} />
          </Route>
        </Routes>
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
      </CartProvider>
    </>
  );
};
