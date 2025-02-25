import { socialLinks } from '@/config/footer-links';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterMenu from './footer-menu';

const Footer = () => {
  return (
    <footer className='py-8 lg:py-16 bg-primary'>
      <div className='container  text-white px-6'>
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='space-y-8'>
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
            <div className=' flex flex-col'>
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
          <div className='flex-1'>
            <FooterMenu />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*  */
}
