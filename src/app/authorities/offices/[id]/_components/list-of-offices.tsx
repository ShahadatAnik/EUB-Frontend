'use client';

import React from 'react';
import data from '../../_const/offices-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const ListOfOffices = () => {
  const pathName = usePathname();

  return (
    <aside>
      <div className='border-l-4 border-primary pl-5 py-3 bg-primary/10'>
        <h4 className='text-2xl font-semibold text-primary'>List of Offices</h4>
      </div>
      <ul className=' mt-4 pl-4 space-y-3'>
        {data.map((item, index) => (
          <li key={index}>
            <Link
              className={cn(
                'hover:underline text-lg',
                pathName === item.href && 'text-primary underline font-medium'
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
