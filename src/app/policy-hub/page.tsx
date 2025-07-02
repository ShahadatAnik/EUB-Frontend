import React from 'react';

import { getPolicy } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

export default async function Page(props: {
  searchParams?: Promise<{
    q?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q || '';
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const data = await getPolicy({
    page,
    limit,
    q,
  });

  return (
    <>
      <PageHeader title='Policy Hub' />

      <PageContainer>
        <Content {...data} />
      </PageContainer>
    </>
  );
}
