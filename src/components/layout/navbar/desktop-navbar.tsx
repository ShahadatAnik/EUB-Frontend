import BrandLogo from '@/components/brand-logo';
import React from 'react';
import { NavMenu } from '../nav-menu';
import ApplyNow from '@/components/apply-now';

const DesktopNavbar = () => {
  return (
    <nav className='py-6 bg-[#FFFBF5]/80 backdrop-blur-sm hidden lg:block '>
      <div className='container  flex items-center  justify-between'>
        <BrandLogo />
        <NavMenu />
        <ApplyNow />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
