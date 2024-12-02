import React from 'react';
import BrandLogo from '../brand-logo';
import { NavMenu } from './nav-menu';
import TopNavbar from './top-nav-bar';

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 right-0 z-50   '>
      <TopNavbar />
      <div className='py-6 bg-white/80 backdrop-blur-sm '>
        <div className='container  flex items-center gap-10 '>
          <BrandLogo />
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
