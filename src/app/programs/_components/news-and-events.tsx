'use client';

import React from 'react';

import { useGetDepartmentNews } from '@/hooks/use-get-course';

import Loader from '@/components/loader';

import NewsCards from '@/app/(top-navbar)/news-events/_components/news-cards';

import ContentWrapper from './content-wrapper';

const NewsAndEvents = ({ department }: { department: string }) => {
  const { data, isLoading } = useGetDepartmentNews(department);

  if (isLoading) return <Loader className='h-[200px]' />;

  return (
    <ContentWrapper title='News & Events'>
      <NewsCards data={data?.data} />
    </ContentWrapper>
  );
};

export default NewsAndEvents;
