import React from 'react';

import NewsAndEvents from '@/app/(programs)/_components/news-and-events';

// export const metadata = generateMetaData({
//   pageUrl: 'https://eub.edu.bd/bba/news-and-events',
//   title:
//     'Bachelor of Business Administration(BBA) News & Events | European University of Bangladesh',
//   description:
//     'Stay updated on news and events from the EUB Bachelor of Business Administration(BBA) department, including workshops, seminars, student achievements, and industrial visits.',
//   keywords: [
//     'Bachelor of Business Administration(BBA) news EUB',
//     'EUB BBA department events',
//     'Engineering workshops Dhaka',
//     'Bachelor of Business Administration(BBA) seminars',
//     'Student site visits',
//     'Tech fest EUB',
//     'University engineering events',
//     'Latest news in Bachelor of Business Administration(BBA)',
//   ],
// });

const Page = () => {
  return <NewsAndEvents department='thm' />;
};

export default Page;
