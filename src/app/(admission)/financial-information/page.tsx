import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';
import {
  getUndergraduateFinancialInformation,
  getGraduateFinancialInformation,
} from '@/server/get';

export default async function Page() {
  const [undergraduateFinancialInformation, graduateFinancialInformation] =
    await Promise.all([
      getUndergraduateFinancialInformation(),
      getGraduateFinancialInformation(),
    ]);

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Financial Information'
      />

      <PageContainer>
        <Content
          graduateInformation={graduateFinancialInformation}
          undergraduateInformation={undergraduateFinancialInformation}
        />
      </PageContainer>
    </>
  );
}
