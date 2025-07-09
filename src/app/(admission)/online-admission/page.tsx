import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/online-admission',
  title: 'Apply Online | European University of Bangladesh (EUB)',
  description:
    'Start your application to EUB. Fill out the official online admission form to apply for our undergraduate and postgraduate programs for the upcoming semester.',
  keywords: [
    'EUB online admission',
    'Apply to EUB',
    'European University of Bangladesh application',
    'University admission form',
    'Online admission Dhaka',
    'Private university application',
    'EUB admission 2025',
    'Fill admission form online',
  ],
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Online Admission' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
