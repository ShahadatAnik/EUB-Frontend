import React from 'react';
import BrandLogo from '../brand-logo';
import { NavMenu } from './nav-menu';

const Navbar = () => {
  return (
    <nav className='py-6 bg-white/80 backdrop-blur-sm '>
      <div className='container  flex items-center gap-10 '>
        <BrandLogo />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
