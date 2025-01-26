'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import { navLinks } from '@/config/nav-links';

const Authorities = () => {
  const pathName = usePathname();

  const links = navLinks.find((item) => item.title === 'Authorities');

  return (
    <aside className='w-[300px]'>
      <div className='border-l-4 border-primary pl-5 py-3 bg-primary/10'>
        <h4 className='text-2xl font-semibold text-primary'>Authorities</h4>
      </div>

      {links && links?.children && (
        <ul className=' mt-4 pl-4 space-y-3'>
          {links.children?.map((child, index) => (
            <li key={index}>
              <Link
                className={cn(
                  'hover:underline text-lg',
                  pathName === child.href &&
                    'text-primary underline font-medium'
                )}
                href={child.href!}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Authorities;
