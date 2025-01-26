import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Contact Us',
  description: 'The contact us of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader
        title='Contact Us'
        description='2/4 Gabtoli, Mirpur, Dhaka 1216, Bangladesh'
      />
      <Content />
    </>
  );
};

export default Page;
