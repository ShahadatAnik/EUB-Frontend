import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Offices',
  description: 'The offices of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Offices' />
      <Content />
    </>
  );
};

export default Page;
