import React from 'react';

import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  // A clear and descriptive title
  title: 'Brief History | European University of Bangladesh (EUB)',

  // A summary of the university's journey from the provided text
  description:
    'Learn about the history of the European University of Bangladesh, established on March 14, 2012. Discover our mission to provide European-standard education, our rapid growth, and our commitment to student-led innovation.',

  // Targeted keywords based on the page content
  keywords: [
    'EUB history',
    'European University of Bangladesh establishment',
    'History of EUB',
    'EUB founding story',
    'Private University Act 2010',
    'UGC approved university Bangladesh',
    'Dhaka university history',
    'EUB mission and vision',
    'European standard education',
    'About European University of Bangladesh',
  ],

  // The URL of the page
  pageUrl: 'https://eub.edu.bd/about/brief-history',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Brief History' />
      <Content />
    </>
  );
};

export default Page;
