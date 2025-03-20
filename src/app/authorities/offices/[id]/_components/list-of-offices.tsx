'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { IOffice } from '@/types';

const ListOfOffices: React.FC<{ data: IOffice[] }> = ({ data }) => {
  const pathName = usePathname();

  return (
    <aside className='min-w-[300px]'>
      <div className='border-l-4 border-primary pl-5 py-3 bg-primary/10'>
        <h4 className='text-2xl font-semibold text-primary'>List of Offices</h4>
      </div>
      <ul className=' mt-4 pl-4 space-y-3'>
        {data?.map((item, index) => (
          <li key={index}>
            <Link
              className={cn(
                'hover:underline text-lg',
                pathName === `/authorities/offices/${item.category}` &&
                  'text-primary underline font-medium'
              )}
              href={`/authorities/offices/${item.category}`}
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
