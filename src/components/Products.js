import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { getProducts } from 'services/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Item = styled.li`
  padding: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  gap: 15px;
  background-color: ${p => p.theme.colors.muted};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;
const Btn = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: 4px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.primary};
  }
`;
const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const href = location.pathname.slice(6);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const visibleProducts = products.filter(product =>
    product.shop.toLowerCase().includes(href)
  );
  const handleAddToCart = (name, price, shop, id) => {
    const product = {
      name: name,
      price: price,
      shop: shop,
      id: id,
    };
    addToCart(product);
    toast(`🦄 Product ${name} from ${shop} added successfully!`);
  };
  if (!href) {
    return null;
  }

  return (
    <Box as="section" display="flex">
      <Box as="ul" display="flex" flexWrap="wrap" gridGap={20} padding={20}>
        {visibleProducts.map(({ price, name, id, shop }) => (
          <Item key={id}>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <Btn onClick={() => handleAddToCart(name, price, shop, id)}>
              Add
            </Btn>
          </Item>
        ))}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Products;
