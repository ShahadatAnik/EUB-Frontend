'use client';

import React from 'react';

import Link from 'next/link';

import { allPrograms } from '@/config/nav-links';
import { ArrowRight, Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

const Courses = () => {
  return (
    <section className='pt-8 lg:py-16 2xl:py-20'>
      <div className='container'>
        <h2 className='mb-6 font-poppins text-xl font-medium text-primary lg:text-2xl'>
          Browse programs by study area
        </h2>

        <div className='grid grid-cols-1 gap-x-4 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-6'>
          {allPrograms?.map((program, index) => (
            <Link
              target='_blank'
              key={program?.title}
              href={program?.href || ''}
            >
              <Button
                variant={'outline-transparent'}
                className={cn(
                  'h-12 w-full justify-between rounded-none border-b-0 text-lg text-primary',
                  (index + 1) % 6 === 0 && 'lg:border-b'
                )}
              >
                <div className='flex flex-1 items-center gap-3 overflow-hidden'>
                  <Bookmark />
                  <span className='flex-1 truncate text-left'>
                    {program?.title}
                  </span>
                </div>

                <div>
                  <ArrowRight />
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
