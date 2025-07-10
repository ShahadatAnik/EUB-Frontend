import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import NewsAndEvents from '@/app/(programs)/_components/news-and-events';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/news-and-events',
  title: 'Civil Engineering News & Events | European University of Bangladesh',
  description:
    'Stay updated on news and events from the EUB Civil Engineering department, including workshops, seminars, student achievements, and industrial visits.',
  keywords: [
    'Civil Engineering news EUB',
    'EUB CE department events',
    'Engineering workshops Dhaka',
    'Civil Engineering seminars',
    'Student site visits',
    'Tech fest EUB',
    'University engineering events',
    'Latest news in Civil Engineering',
  ],
});

const Page = () => {
  return <NewsAndEvents department={Program['BSC-CIVIL']} />;
};

export default Page;
