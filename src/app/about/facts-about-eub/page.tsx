import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Key Facts About EUB | European University of Bangladesh',
  description:
    'Discover key facts about the European University of Bangladesh (EUB). Learn about our excellent faculty, globally recognized degrees, state-of-the-art facilities, affordable tuition, and strong career placement support.',
  keywords: [
    'EUB facts',
    'About EUB',
    'Why study at EUB',
    'European University of Bangladesh faculty',
    'EUB facilities',
    'EUB tuition fees',
    'EUB global recognition',
    'EUB career placement',
    'EUB laboratories',
    'Flexible class schedules EUB',
    'University with installment plans',
    'EUB global collaboration',
  ],
  pageUrl: '/about/facts-about-eub',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Facts about EUB' />
      <Content />
    </>
  );
};

export default Page;
