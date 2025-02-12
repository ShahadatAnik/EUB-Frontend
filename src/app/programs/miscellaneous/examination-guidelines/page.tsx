import React from 'react';

import { getExaminationGuidelines } from '@/server/get';

import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

export default async function Page() {
  const data = await getExaminationGuidelines();
  return (
    <>
      <PageHeader title='Examination Guidelines' />
      <PageContainer>
        <Content initialData={data} />
      </PageContainer>
    </>
  );
}
