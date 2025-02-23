import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';
import { getFinancialInformation } from '@/server/get';

export default async function Page() {
  const financialInformation = await getFinancialInformation();

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Financial Information'
      />

      <PageContainer>
        <Content data={financialInformation} />
      </PageContainer>
    </>
  );
}
