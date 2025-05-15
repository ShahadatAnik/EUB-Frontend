'use client';

import React from 'react';

import PageHeader from '@/components/page-header';

import { navLinks } from '@/config/nav-links';
import { usePathname } from 'next/navigation';
import Authorities from '../_components/authorities';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathName = usePathname();
  const links = navLinks.find((link) => link.title === 'Authorities');

  if (!links?.children) return null;

  const title = links.children.find((link) => link.href === pathName)?.title;

  return (
    <>
      <PageHeader title={title || 'Authorities'} />
      <div className='py-6 lg:py-12'>
        <div className='container flex flex-col lg:flex-row gap-8'>
          <Authorities />
          <div className='flex-1 space-y-10'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
