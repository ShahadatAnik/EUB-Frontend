import BrandLogo from '@/components/brand-logo';
import React from 'react';
import { NavMenu } from '../nav-menu';
import ApplyNow from '@/components/apply-now';

const DesktopNavbar = () => {
  return (
    <nav className='py-6 bg-background/90 backdrop-blur-lg hidden lg:block '>
      <div className='container  flex items-center  justify-between'>
        <BrandLogo />
        <NavMenu />
        <ApplyNow />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
