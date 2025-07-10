import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/student-service-desk',
  title:
    'Freshers Guide | Student Services | European University of Bangladesh',
  description:
    'A complete service guideline for new students at EUB. Find contact info for registration, accounts, exams, library, and other essential student services.',
  keywords: [
    'EUB freshers guide',
    'New student services Bangladesh',
    'University guide for freshmen',
    'Student service desk EUB',
    'EUB registration for new students',
    'University contacts for freshers',
    'EUB student help',
    'Navigating university as a fresher',
  ],
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Student Service Guideline for Freshers' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
