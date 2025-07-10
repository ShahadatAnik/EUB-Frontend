import React from 'react';

import {
  getCertificateTuitionFees,
  getGraduateTuitionFees,
  getUndergraduateTuitionFees,
} from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/tuition-and-other-fees-structure',
  title: 'EUB Tuition Fees & Cost | European University of Bangladesh',
  description:
    'View the detailed tuition fees and cost structure for all undergraduate and graduate programs at EUB. Learn about admission fees, credit hour costs, and waivers.',
  keywords: [
    'EUB tuition fees',
    'European University of Bangladesh cost',
    'University tuition fees in Bangladesh',
    'Affordable private university Dhaka',
    'CSE program cost',
    'BBA tuition fees',
    'Pharmacy tuition fees',
    'EUB admission fee',
  ],
});

export default async function Page() {
  const [
    undergraduateTuitionFees,
    graduateTuitionFees,
    certificateTuitionFees,
  ] = await Promise.all([
    getUndergraduateTuitionFees(),
    getGraduateTuitionFees(),
    getCertificateTuitionFees(),
  ]);

  return (
    <>
      <PageHeader title='Tuition and Other Fees Structure' />
      <PageContainer>
        <Content
          initialData={{
            undergraduateTuitionFees,
            graduateTuitionFees,
            certificateTuitionFees,
          }}
        />
      </PageContainer>
    </>
  );
}
