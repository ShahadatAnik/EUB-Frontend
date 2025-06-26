'use client';

import React from 'react';

import { useGetDepartmentNews } from '@/hooks/use-get-course';

import NoDataFound from '@/components/no-data-found';

import NewsCards from '@/app/(top-navbar)/news-events/_components/news-cards';

import ContentWrapper from './content-wrapper';
import NewsCardSkeleton from './skeleton/news-card-skeleton';

const NewsAndEvents = ({ department }: { department: string }) => {
  const { data, isLoading } = useGetDepartmentNews(department);

  return (
    <ContentWrapper title='News & Events'>
      {isLoading && <NewsCardSkeleton />}
      {!isLoading && data && <NewsCards data={data.data} />}
      {!isLoading && (!data || data?.data?.length === 0) && (
        <NoDataFound message='No news found' />
      )}
    </ContentWrapper>
  );
};

export default NewsAndEvents;
