import PageHeader from '@/components/page-header';
import React from 'react';

import { generateMetaData } from '@/lib/utils';
import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Office Details',
  description: 'Office details of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Office Details' />
      <Content />
    </>
  );
};

export default Page;
