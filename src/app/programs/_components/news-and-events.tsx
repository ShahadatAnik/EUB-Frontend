import React from 'react';

import ContentWrapper from './content-wrapper';
import NewsCards from '@/app/(top-navbar)/news-events/_components/news-cards';
import { useGetDepartmentNews } from '@/hooks/use-get-course';
import Loader from '@/components/loader';

const NewsAndEvents = ({ department }: { department: string }) => {
  const { data, isLoading } = useGetDepartmentNews(department);

  if (isLoading) return <Loader />;

  return (
    <ContentWrapper title='News & Events'>
      <NewsCards data={data?.data} />
    </ContentWrapper>
  );
};

export default NewsAndEvents;
