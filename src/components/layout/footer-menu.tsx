'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/config/nav-links';

const FooterMenu = () => {
  const pathName = usePathname();

  const aboutLinks = navLinks.find((link) => link.title === 'About')?.children;

  const admissionLinks = navLinks.find(
    (link) => link.title === 'Admission'
  )?.children;

  const usefulLinks = navLinks.find(
    (link) => link.title === 'Useful Links'
  )?.children;

  return (
    <div className='grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10'>
      <div className=''>
        <h4 className='mb-2 text-lg font-semibold'>About</h4>
        <ul className='space-y-2'>
          {aboutLinks?.map((link, index) => (
            <li key={index}>
              <Link
                className={pathName === link.href ? 'underline' : ''}
                href={link.href!}
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className={pathName === '/contact-us' ? 'underline' : ''}
              href='/contact-us'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className=''>
        <h4 className='mb-2 text-lg font-semibold'>Admission</h4>
        <ul className='space-y-2'>
          <li>
            <Link
              className={pathName === '/online-admission' ? 'underline' : ''}
              href='/online-admission'
            >
              Apply Now
            </Link>
          </li>
          {admissionLinks?.map((link, index) => (
            <li key={index}>
              <Link
                className={pathName === link.href ? 'underline' : ''}
                href={link.href!}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=''>
        <h4 className='mb-2 text-lg font-semibold'>Useful Links</h4>
        <ul className='space-y-2'>
          {usefulLinks?.map((link, index) => (
            <li key={index}>
              <Link
                className={pathName === link.href ? 'underline' : ''}
                href={link.href!}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
