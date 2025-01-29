import React from 'react';

import { getExaminationGuidelines } from '@/server/getExaminationGuidelines';

import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

export default async function Page() {
  const data = await getExaminationGuidelines();
  return (
    <>
      <PageHeader title='Examination Guidelines' />
      <PageContainer>
        <Content data={data} />
      </PageContainer>
    </>
  );
}
