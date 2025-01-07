import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Syndicate',
  description: 'The syndicate of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Syndicate' />
      <Content />
    </>
  );
};

export default Page;
