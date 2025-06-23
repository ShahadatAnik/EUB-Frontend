import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Gallery Details',
  description: 'The gallery details of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Gallery Details' />
      <Content />
    </>
  );
};

export default Page;
