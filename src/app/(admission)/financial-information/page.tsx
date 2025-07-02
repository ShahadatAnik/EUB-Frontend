import React from 'react';

import { getFinancialInformation } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

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
