import React from 'react';

import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

import { getAcademicCalender } from '@/server/getAcademicCalender';

export default async function Page() {
  const data = await getAcademicCalender();

  return (
    <>
      <PageHeader title='Academic Calendar' />
      <PageContainer>
        <Content initialData={data} />
      </PageContainer>
    </>
  );
}
