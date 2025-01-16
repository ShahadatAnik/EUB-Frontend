import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Exam Schedule',
  description: 'The exam schedule of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Exam Schedule' />
      <Content />
    </>
  );
};

export default Page;
