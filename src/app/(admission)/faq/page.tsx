import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/faq',
  title: 'FAQs | European University of Bangladesh (EUB)',
  description:
    'Find answers to frequently asked questions about EUB, including admissions, programs, tuition fees, credit transfers, scholarships, and campus life.',
  keywords: [
    'EUB FAQs',
    'University frequently asked questions',
    'Admission questions EUB',
    'Program query',
    'Tuition fee questions',
    'Credit transfer FAQ',
    'University admission help',
    'EUB general questions',
  ],
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Frequently Asked Questions' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
