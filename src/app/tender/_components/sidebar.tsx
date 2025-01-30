'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { allTenders } from '../_const/data';
import StickySidebar from '@/components/sticky-sidebar';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <StickySidebar>
      <div className='space-y-2'>
        {allTenders.map((item, index) => (
          <Link className='block' key={index} href={`${pathName}#${item.id}`}>
            <Button
              variant={'default'}
              className='w-full text-wrap text-start h-fit  justify-start rounded-none'
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </StickySidebar>
  );
};

export default Sidebar;
