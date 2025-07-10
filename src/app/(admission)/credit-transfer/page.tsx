import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/credit-transfer',
  title: 'Credit Transfer Policy | European University of Bangladesh',
  description:
    'Learn about the credit transfer policy at EUB. Find requirements for transferring from other universities, including minimum GPA, documents, and process.',
  keywords: [
    'Credit transfer university Bangladesh',
    'EUB credit transfer policy',
    'Transfer to European University of Bangladesh',
    'University transfer requirements',
    'Transfer student admission',
    'How to transfer university credits',
    'EUB transfer GPA requirement',
    'University credit equivalence',
  ],
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Credit Transfer' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
