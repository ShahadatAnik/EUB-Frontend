import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Facts about EUB',
  description: 'Facts about the European University of Bangladesh',
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
