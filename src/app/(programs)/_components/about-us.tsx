'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { useGetAboutUs } from '@/hooks/use-get-course';

import { Skeleton } from '@/components/ui/skeleton';

import ContentWrapper from './content-wrapper';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const AboutUs: React.FC<{ department: string }> = ({ department }) => {
  const { data, isLoading } = useGetAboutUs(department);

  return (
    <ContentWrapper title='About Us'>
      {isLoading && (
        <div className='space-y-4'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
        </div>
      )}
      {!isLoading && (
        <RichTextViewer
          content={
            data && data.length > 0
              ? data[0].description
              : 'No description available'
          }
        />
      )}
    </ContentWrapper>
  );
};

export default AboutUs;
