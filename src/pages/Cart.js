import styled from 'styled-components';
import { Box } from 'components/Box';

import { useState, useEffect } from 'react';
import { getShops } from 'fakeApi';
import CartProducts from 'components/CartProducts';

const NavItem = styled.div`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

const Cart = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(setShops);
  }, []);

  return (
    <Box as="main" display="flex">
      <Box as="section" p={4}>
        <Box as="ul" display="flex" flexDirection="column">
          {shops.map(({ href, text }) => (
            <NavItem key={text} to={`${href}`}>
              <h3>{text}</h3>
            </NavItem>
          ))}
        </Box>
      </Box>
      <CartProducts />
    </Box>
  );
};

export default Cart;
