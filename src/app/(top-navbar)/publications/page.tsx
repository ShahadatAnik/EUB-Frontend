import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';
import { getFaculties, getPublications } from '@/server/get';

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

  const data = await getPublications({
    page,
    limit,
    q,
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
