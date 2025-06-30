import React from 'react';

import { getAcademicInformationPolicies } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

export default async function Page() {
  const data = await getAcademicInformationPolicies();

  return (
    <>
      <PageHeader title='Academic Information and Policies' />
      <PageContainer>
        <Content initialData={data} />
      </PageContainer>
    </>
  );
}
