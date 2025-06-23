'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/config/nav-links';

import StickySidebar from '@/components/sticky-sidebar';

import { cn } from '@/lib/utils';

const Authorities = () => {
  const pathName = usePathname();

  const links = navLinks.find((item) => item.title === 'Authorities');
  return (
    <StickySidebar containerClassName='lg:pt-0'>
      <div className='border-l-4 border-primary bg-primary/10 py-3 pl-5'>
        <h4 className='text-2xl font-semibold text-primary'>Authorities</h4>
      </div>

      {links && links?.children && (
        <ul className='mt-4 space-y-3 pl-4'>
          {links.children?.map((child, index) => (
            <li key={index}>
              <Link
                className={cn(
                  'text-lg hover:underline',
                  pathName === child.href &&
                    'font-medium text-primary underline'
                )}
                href={child.href!}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </StickySidebar>
  );
};

export default Authorities;
