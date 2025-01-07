import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Academic Council',
  description: 'The academic council of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Academic Council' />
      <Content />
    </>
  );
};

export default Page;
