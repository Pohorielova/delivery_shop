import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { useLocation } from 'react-router-dom';
import { getProducts } from 'fakeApi';

const Item = styled.li`
  padding: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  gap: 15px;

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

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const href = location.pathname.slice(6);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const visibleProducts = products.filter(product =>
    product.shop.toLowerCase().includes(href)
  );
  if (!href) {
    return null;
  }
  return (
    <Box as="section" display="flex">
      <Box
        as="ul"
        display="flex"
        flexWrap="wrap"
        // flexDirection="column"
        gridGap={20}
        padding={20}
        // py={20}
        // border="1px solid black"
      >
        {visibleProducts.map(({ price, name, id }) => (
          <Item key={id}>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button>Add</button>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
