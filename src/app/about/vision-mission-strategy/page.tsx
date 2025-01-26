import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Vision, Mission, Strategy',
  description:
    'The vision, mission, and strategy of the European University of Bangladesh',
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
