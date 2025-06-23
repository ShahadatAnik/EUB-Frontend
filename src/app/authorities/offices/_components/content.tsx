'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IOffice } from '@/types';

import ClientImage from '@/components/client-image';

import { useOffices } from '../_const/query';

const Content: React.FC<{ initialData: IOffice[] }> = ({ initialData }) => {
  const { data } = useOffices({ initialData });

  return (
    <div className='py-6 lg:py-12'>
      <div className='container max-w-[1200px]'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex flex-col overflow-hidden rounded-sm bg-white shadow-sm'
            >
              <div className='relative aspect-video'>
                {item.image ? (
                  <ClientImage
                    className='object-contain object-center p-10'
                    fill
                    src={`${item.image}`}
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
                  href={`/authorities/offices/${item.category}`}
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
