import React from 'react';

import { getFaculties, getPublications } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

export default async function Page(props: {
  searchParams?: Promise<{
    q?: string;
    page?: string;
    limit?: string;
    filter?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q || '';
  const filter = searchParams?.filter || '';
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const data = await getPublications({
    page,
    limit,
    q,
    filter,
  });

  const faculties = await getFaculties();

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Publications'
      />

      <PageContainer>
        <Content faculties={faculties} {...data} />
      </PageContainer>
    </>
  );
}
