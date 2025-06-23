'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { INewsPortal } from '@/types';
import { formatDate } from 'date-fns';

import AlbumSlider from '@/components/album-slider';
import LatestPosts from '@/components/latest-posts';
import { Separator } from '@/components/ui/separator';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const Content: React.FC<{ data: INewsPortal }> = ({ data }) => {
  return (
    <div className='flex flex-col gap-8 lg:flex-row'>
      <div className='flex-1'>
        <h2 className='font-poppins text-xl font-medium lg:text-3xl'>
          {data?.title}
        </h2>
        <h3>{data?.subtitle}</h3>
        <div className='mt-4'>
          <p>{formatDate(new Date(data?.published_date), 'dd MMM, yyyy')}</p>
        </div>
        <Separator className='mb-6 mt-3' />

        <div>
          <AlbumSlider
            images={data?.carousel.map((item) => ({
              original: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.label}`,
            }))}
          />

          {data?.description && (
            <div className='mt-4'>
              <RichTextViewer content={data?.description} />
            </div>
          )}
          {data?.content && (
            <div className='mt-4'>
              <RichTextViewer content={data?.content} />
            </div>
          )}
        </div>
      </div>

      <div className='h-fit flex-[0_0_340px] lg:border-l lg:pl-8'>
        <LatestPosts department={data?.department_name} />
      </div>
    </div>
  );
};

export default Content;
