import styled from 'styled-components';
import { Box } from 'components/Box';

import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
const Item = styled.li`
  padding: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 5px;

  border: 1px solid;
  border-color: ${p => p.theme.colors.primary};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

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
    console.log('Order Data:', orderData);
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
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </Item>
          ))}
        </Box>
      </Box>
      <p>Total Amount: {totalAmount}</p>
      <p>Total Price: {totalPrice}</p>
      <button onClick={handleSubmit}>Submit</button>
    </Box>
  );
};

export default Cart;
