import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Board of Trustees',
  description: 'The Board of Trustees of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Board of Trustees' />
      <Content />
    </>
  );
};

export default Page;
