'use client';

import React from 'react';

import TopNavbar from './top-nav-bar';
import Footer from './footer';
import { cn } from '@/lib/utils';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

interface ILayoutProps {
  children: React.ReactNode;
  navbarClassName?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, navbarClassName }) => {
  const pathName = usePathname();
  const isHome = pathName === '/';
  return (
    <div className='relative'>
      <div
        className={cn(
          'top-0 left-0 right-0 z-50 shadow-md border-b-2 border-primary',
          isHome ? 'fixed' : 'sticky',
          navbarClassName
        )}
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
