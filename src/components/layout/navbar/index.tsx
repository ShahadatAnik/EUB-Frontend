import React from 'react';

import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

export default Navbar;
