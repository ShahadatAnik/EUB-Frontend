import NewsCard from '@/app/(top-navbar)/news-events/_components/news-card';
import { buttonVariants } from '@/components/ui/button';
import { INewsPortal, IPaginationResponse } from '@/types';
import Link from 'next/link';
import React from 'react';

const NewsEvents: React.FC<IPaginationResponse<INewsPortal>> = ({ data }) => {
  return (
    <section className='py-12 lg:py-16 2xl:py-20'>
      <div className='container space-y-8'>
        <h2 className=' text-2xl 2xl:text-4xl font-medium text-primary  text-center font-poppins'>
          News & Events
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item: INewsPortal, index: number) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>

        <div className='flex justify-center'>
          <Link className={buttonVariants()} href={'/news-events'}>
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
