'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import data from '../../_const/offices-data';

const ListOfOffices = () => {
  const pathName = usePathname();

  return (
    <aside className='min-w-[300px]'>
      <div className='border-l-4 border-primary bg-primary/10 py-3 pl-5'>
        <h4 className='text-2xl font-semibold text-primary'>List of Offices</h4>
      </div>
      <ul className='mt-4 space-y-3 pl-4'>
        {data.map((item, index) => (
          <li key={index}>
            <Link
              className={cn(
                'text-lg hover:underline',
                pathName === item.href && 'font-medium text-primary underline'
              )}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ListOfOffices;
