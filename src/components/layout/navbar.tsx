import React from 'react';

import DesktopNavbar from './navbar/desktop-navbar';
import MobileNavbar from './navbar/mobile-navbar';

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

export default Navbar;
