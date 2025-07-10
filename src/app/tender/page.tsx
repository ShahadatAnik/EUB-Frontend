import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/tender',
  title:
    'Tender Notices | Procurement | European University of Bangladesh (EUB)',
  description:
    'Find official tender notices from the European University of Bangladesh. Download documents for goods, works, and services, and view procurement opportunities.',
  keywords: [
    'EUB tender',
    'University tender notice Bangladesh',
    'Procurement notices Dhaka',
    'E-GP EUB',
    'Standard Tender Document (STD)',
    'Supply tenders university',
    'Construction tenders',
    'University vendor enlistment',
  ],
});

const Page = () => {
  return (
    <>
      <PageHeader title='Tender' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
