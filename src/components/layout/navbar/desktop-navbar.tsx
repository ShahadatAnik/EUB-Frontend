import React from 'react';

import ApplyNow from '@/components/apply-now';
import BrandLogo from '@/components/brand-logo';

import { NavMenu } from '../nav-menu';

const DesktopNavbar = () => {
  return (
    <nav className='hidden bg-background/90 py-6 backdrop-blur-lg lg:block'>
      <div className='container flex items-center justify-between'>
        <BrandLogo />
        <NavMenu />
        <ApplyNow />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
