import React from 'react';

import ContentWrapper from './content-wrapper';
import NewsCards from '@/app/(top-navbar)/news-events/_components/news-cards';
import { useGetDepartmentNews } from '@/hooks/use-get-course';

const NewsAndEvents = ({ department }: { department: string }) => {
  const { data, isLoading } = useGetDepartmentNews(department);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ContentWrapper title='News & Events'>
      <NewsCards data={data?.data} />
    </ContentWrapper>
  );
};

export default NewsAndEvents;
