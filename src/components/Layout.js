import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="grid" p={15}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
