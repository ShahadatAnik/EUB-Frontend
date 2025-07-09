import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Contact Us | European University of Bangladesh (EUB)',
  description: `Find our campus address in Gabtoli, Dhaka, phone numbers for admissions and information, and email contacts. Get in touch with EUB today.Get in touch with the European University of Bangladesh. Find our campus address at Gabtoli, Dhaka, phone numbers for admission and information, and email addresses for all inquiries.`,
  keywords: [
    'Contact EUB',
    'European University of Bangladesh address',
    'EUB phone number',
    'EUB campus location',
    'EUB admissions contact',
    'European University Dhaka contact',
    'How to get to EUB campus',
    'Gabtoli university contact',
    'EUB email address',
    'EUB information desk',
  ],

  // The URL of the page
  pageUrl: '/contact-us',
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
