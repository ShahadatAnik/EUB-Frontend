import React from 'react';
import Navbar from './navbar';
import TopNavbar from './top-nav-bar';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 right-0 z-50   hidden lg:block'>
        <TopNavbar />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
