'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ClientImage from '@/components/client-image';
import { IOffice } from '@/types';
import { useOffices } from '../_const/query';

const Content: React.FC<{ initialData: IOffice[] }> = ({ initialData }) => {
  const { data } = useOffices({ initialData });

  return (
    <div className='py-6 lg:py-12'>
      <div className='container max-w-[1200px]'>
        <div className='grid grid-cols-3 gap-4'>
          {data.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col rounded-sm shadow-sm overflow-hidden'
            >
              <div className='aspect-video relative'>
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

              <div className=' flex-1 px-6 py-4 border-t flex items-center  '>
                <Link
                  className=' text-lg text-primary font-medium hover:underline'
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
