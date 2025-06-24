import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Brief History',
  description: 'The brief history of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Brief History' />
      <Content />
    </>
  );
};

export default Page;
