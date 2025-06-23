import React from 'react';

import { getAcademicCalender } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

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
