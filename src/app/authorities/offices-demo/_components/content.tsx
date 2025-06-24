'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import officesData from '../_const/offices-data';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-8'>
          {officesData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col overflow-hidden rounded-sm bg-white shadow-sm'
            >
              <div className='relative aspect-video'>
                {item.image ? (
                  <Image
                    className='object-cover object-center'
                    fill
                    src={item.image}
                    alt={item.title}
                  />
                ) : (
                  <Image
                    className='object-contain object-center p-10'
                    fill
                    src={'/images/logo-eub.png'}
                    alt={item.title}
                  />
                )}
              </div>

              <div className='flex flex-1 items-center border-t px-6 py-4'>
                <Link
                  className='text-lg font-medium text-primary hover:underline'
                  href={item.href}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
