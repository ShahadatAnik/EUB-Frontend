import { topNavLinks } from '@/config/nav-links';
import Link from 'next/link';
import React from 'react';

const TopNavbar = () => {
  return (
    <div className='bg-primary w-full py-2 hidden lg:block'>
      <div className='container flex justify-center gap-4 items-center divide-x divide-border'>
        {topNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className='text-white hover:underline text-sm pl-4'
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavbar;
