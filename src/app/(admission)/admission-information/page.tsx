import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/admission-information',
  title: 'Admission Information & Requirements | EUB',
  description:
    'Find detailed admission information for EUB. Learn about academic eligibility, program requirements, the online application process, and required documents.',
  keywords: [
    'EUB admission requirements',
    'University eligibility criteria Bangladesh',
    'How to apply to EUB',
    'Admission process university',
    'Undergraduate admission requirements',
    'Postgraduate admission requirements',
    'Course waiver for diploma',
    'Required documents for admission',
  ],
});

export default async function Page() {
  return (
    <>
      <PageHeader title='Admission Information' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
}
