import { Navbar } from '../fragments/Navbar';
import { Outlet } from 'react-router';

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
