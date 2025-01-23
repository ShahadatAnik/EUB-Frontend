import BrandLogo from '@/components/brand-logo';
import React from 'react';
import { NavMenu } from '../nav-menu';

const DesktopNavbar = () => {
  return (
    <nav className='py-6 bg-[#FFFBF5]/80 backdrop-blur-sm hidden lg:block '>
      <div className='container  flex items-center gap-40'>
        <BrandLogo />
        <NavMenu />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
