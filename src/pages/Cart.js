import { Box } from 'components/Box';

import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import { createOrder } from 'services/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Btn, BtnDel, Item } from './Cart.styled';

const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    name: '',
    email: '',
  });

  const handleRemoveItem = index => {
    removeFromCart(index);
    toast('🦄 Removed successfully!');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleQuantityChange = (index, e) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = parseInt(e.target.value);
    setCartItems(newCartItems);
  };

  const handleSubmit = () => {
    const orderData = {
      ...formData,
      cartItems: cartItems,
    };
    createOrder(JSON.stringify(orderData));
    console.log(orderData);
    toast('🦄 Order saved successfully!');
    setFormData({
      address: '',
      phoneNumber: '',
      name: '',
      email: '',
    });
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Box display="flex" flexDirection="column" gridGap={2} p={20}>
      <Box
        as="main"
        display="flex"
        gridGap={80}
        mb={20}
        alignItems="flex-start"
      >
        <Box display="flex" flexDirection="column" gridGap={2}>
          <Box display="flex" flexDirection="column" gridGap={2}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box display="flex" flexDirection="column" gridGap={2}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Box>
          <Box display="flex" flexDirection="column" gridGap={2}>
            <label>Phone</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Box>
          <Box display="flex" flexDirection="column" gridGap={2}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>
        </Box>

        <Box as="ul" display="flex" gridGap={5} flexWrap="wrap">
          {cartItems.map((item, index) => (
            <Item key={index}>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Shop: {item.shop}</p>

              <input
                type="number"
                value={item.quantity}
                onChange={e => handleQuantityChange(index, e)}
              />
              <BtnDel onClick={() => handleRemoveItem(index)}>Remove</BtnDel>
            </Item>
          ))}
        </Box>
      </Box>
      <p>Total Amount: {totalAmount}</p>
      <p>Total Price: {totalPrice}</p>
      <Btn onClick={handleSubmit}>Submit</Btn>
      <ToastContainer />
    </Box>
  );
};

export default Cart;
