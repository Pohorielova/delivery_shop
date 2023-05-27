import React from 'react';
import { Box } from 'components/Box';

const WelcomeCaption = () => {
  return (
    <Box p={16}>
      <Box as="h2">Welcome to the our Delivery App!</Box>
      <Box as="p" mt={15} color="#07c">
        Please, select any of the stores on the left.{' '}
      </Box>
    </Box>
  );
};
export default WelcomeCaption;
