import { socialLinks } from '@/config/footer-links';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=' py-6 lg:py-12 bg-primary'>
      <div className='container grid lg:grid-cols-2 gap-8  text-white'>
        <div className=''>
          <h4 className='text-xl font-semibold mb-2'>
            European University of Bangladesh
          </h4>
          <div className='space-y-1'>
            <p>
              <span className='font-bold'>Address : </span>
              2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh
            </p>
            <p>
              <span className='font-bold'>Admission Office : </span>{' '}
              01968774933, 01968774931
              <br />
              01968774927 (Director)
            </p>
          </div>
        </div>
        <div className=' flex flex-col lg:items-end'>
          <ul className='flex gap-4 lg:mb-4'>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target='_blank'
                  className=' size-fit inline-block'
                >
                  <Image
                    width={40}
                    height={40}
                    src={link.icon}
                    alt={link.title}
                    className='object-contain'
                  />
                </Link>
              </li>
            ))}
          </ul>

          <small>Developed and Maintained by : EUB ICT Division</small>
          <small>
            &copy; 2012-{new Date().getFullYear()} European University of
            Bangladesh (EUB), All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
