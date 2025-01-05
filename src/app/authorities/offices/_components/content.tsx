import React from 'react';
import data from '../_const/offices-data';
import Image from 'next/image';
import Link from 'next/link';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-8'>
          {data.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col rounded-sm shadow-sm overflow-hidden'
            >
              <div className='aspect-video relative'>
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

              <div className=' flex-1 px-6 py-4 border-t flex items-center  '>
                <Link
                  className=' text-lg text-primary font-medium hover:underline'
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
