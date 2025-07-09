import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Vision, Mission & Strategy | European University of Bangladesh (EUB)',
  description:
    'Discover the vision, mission, and strategy of EUB. Learn about our commitment to providing inclusive, affordable, and high-quality education to foster innovation, ethical leadership, and sustainable development in Bangladesh and beyond.',
  keywords: [
    'EUB vision and mission',
    'University mission statement',
    'Educational strategy Bangladesh',
    'Inclusive education',
    'Affordable quality education',
    'Sustainable development in education',
    'Globally competent leaders',
    'Ethical leadership development',
    'Innovation in university',
    'Social responsibility in education',
    'EUB core values',
  ],
  pageUrl: '/about/vision-mission-strategy',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Vision, Mission, Strategy' />
      <Content />
    </>
  );
};

export default Page;
