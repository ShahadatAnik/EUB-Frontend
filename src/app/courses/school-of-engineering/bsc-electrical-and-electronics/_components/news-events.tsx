import React from 'react';

import ContentWrapper from './content-wrapper';
import NewsCards from '@/app/(top-navbar)/news-events/_components/news-cards';

const NewsEvents = () => {
  return (
    <ContentWrapper title='News & Events'>
      <NewsCards length={6} />
    </ContentWrapper>
  );
};

export default NewsEvents;
