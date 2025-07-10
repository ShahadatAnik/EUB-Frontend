import React from 'react';

import { getFinancialInformation } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/financial-information',
  title:
    'EUB Program Costs & Financial Aid | European University of Bangladesh',
  description:
    'Find total program costs for Engineering, Business, and Arts at EUB. See how financial aid and tuition waivers can significantly reduce your total expenses.',
  keywords: [
    'EUB financial aid',
    'European University of Bangladesh program cost',
    'Total cost of degree in Bangladesh',
    'University tuition waiver',
    'EUB scholarship and waiver',
    'Cost of CSE in Bangladesh',
    'BBA total cost',
    'Affordable university degree',
  ],
});

export default async function Page() {
  const financialInformation = await getFinancialInformation();

  return (
    <>
      <PageHeader title='Financial Information' />

      <PageContainer>
        <Content data={financialInformation} />
      </PageContainer>
    </>
  );
}
