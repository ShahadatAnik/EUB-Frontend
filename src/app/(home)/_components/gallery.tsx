import NoticeBoard from '@/components/notice-board';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <section className='py-12 lg:py-16 2xl:py-20 '>
      <div className='container space-y-4 lg:space-y-8'>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm'>
          <div>
            <Image
              width={400}
              height={400}
              src={'/placeholder.svg'}
              alt='placeholder'
            />
          </div>
          <div className='flex-1'>
            <h2 className='text-xl lg:text-3xl font-semibold'>
              Under development!
            </h2>
            <p className='mt-2 lg:mt-4'>
              Exciting updates are on the way. Stay with us!
            </p>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
          <div className='lg:col-span-2 space-y-4  lg:space-y-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  lg:gap-8'>
              <div className='p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm'>
                <h2 className='text-xl lg:text-2xl font-semibold'>
                  Under development!
                </h2>
                <p className='mt-1 lg:mt-2'>
                  Exciting updates are on the way. Stay with us!
                </p>
              </div>

              <div className='p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm'>
                <h2 className='text-xl lg:text-2xl font-semibold'>
                  Under development!
                </h2>
                <p className='mt-1 lg:mt-2'>
                  Exciting updates are on the way. Stay with us!
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm'>
              <div>
                <Image
                  width={200}
                  height={200}
                  src={'/placeholder.svg'}
                  alt='placeholder'
                />
              </div>
              <div className='flex-1'>
                <h2 className='text-2xl font-semibold'>Under development!</h2>
                <p className='mt-2'>
                  Exciting updates are on the way. Stay with us!
                </p>
              </div>
            </div>
          </div>

          <div>
            <NoticeBoard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
