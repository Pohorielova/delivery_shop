import axios from 'axios';

const api = axios.create({
  baseURL: 'https://delivery-shop-cbwu.onrender.com',
});

export const getProducts = () => {
  return api
    .get('/api/product')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch products');
    });
};

export const getShops = () => {
  return api
    .get('/api/shop')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch products');
    });
};

export const createOrder = orderData => {
  return api
    .post('/api/order', orderData)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('Failed to create order');
    });
};
