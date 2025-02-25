'use client';

import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Bookmark } from 'lucide-react';
import { allPrograms } from '@/config/nav-links';

const Courses = () => {
  return (
    <section className='py-12 lg:py-16 2xl:py-20'>
      <div className='container'>
        <h2 className='text-xl lg:text-2xl font-medium text-primary mb-6 font-poppins'>
          Browse courses by study area
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 lg:grid-flow-col lg:grid-rows-6'>
          {allPrograms?.map((program, index) => (
            <Link
              target='_blank'
              key={program?.title}
              href={program?.href || ''}
            >
              <Button
                variant={'outline-transparent'}
                className={cn(
                  'h-12 text-lg rounded-none w-full justify-between border-b-0 text-primary',
                  (index + 1) % 6 === 0 && 'lg:border-b'
                )}
              >
                <div className='flex-1 flex items-center gap-3 overflow-hidden'>
                  <Bookmark />
                  <span className='flex-1 text-left truncate'>
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
