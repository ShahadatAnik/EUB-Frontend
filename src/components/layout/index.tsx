import React from 'react';

import TopNavbar from './top-nav-bar';
import Footer from './footer';
import { cn } from '@/lib/utils';
import Navbar from './navbar';

interface ILayoutProps {
  children: React.ReactNode;
  navbarClassName?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, navbarClassName }) => {
  return (
    <div className='relative'>
      <div
        className={cn('absolute top-0 left-0 right-0 z-50', navbarClassName)}
      >
        <TopNavbar />
        <Navbar />
      </div>
      <div className='lg:min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
