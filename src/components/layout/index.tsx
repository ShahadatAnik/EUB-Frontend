'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { useScrollToTop } from '@/hooks/use-scroll-to-top';

import { cn } from '@/lib/utils';

import { ScrollToTopButton } from '../scroll-to-top';
import Footer from './footer';
import Navbar from './navbar';
import TopNavbar from './top-nav-bar';

interface ILayoutProps {
  children: React.ReactNode;
  navbarClassName?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, navbarClassName }) => {
  const pathName = usePathname();
  const isHome = pathName === '/';

  const { isVisible, scrollToTop } = useScrollToTop({ threshold: 300 });
  return (
    <div className='relative'>
      <div
        className={cn(
          'left-0 right-0 top-0 z-50 border-b-2 border-primary shadow-md',
          isHome ? 'fixed' : 'sticky',
          navbarClassName
        )}
      >
        <TopNavbar />
        <Navbar />
      </div>
      <div className='lg:min-h-screen'>{children}</div>
      <Footer />
      {isVisible && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default Layout;
