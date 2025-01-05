import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'International Recognition',
  description:
    'The international recognition of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='International Recognition' />
      <Content />
    </>
  );
};

export default Page;
