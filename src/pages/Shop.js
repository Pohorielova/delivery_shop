import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { getShops } from 'services/Api';

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

const Shop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(setShops);
  }, []);

  return (
    <Box as="main" display="grid" gridTemplateColumns="200px 1fr">
      <Box as="header" p={4}>
        <Box as="ul" display="flex" flexDirection="column">
          {shops.map(({ href, text }) => (
            <NavItem key={text} to={`${href}`}>
              <h3>{text}</h3>
            </NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Shop;
