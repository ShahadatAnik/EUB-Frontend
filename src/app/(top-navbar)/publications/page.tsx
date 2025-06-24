import React from 'react';

import { getFaculties, getPublications } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Publications and Research | European University of Bangladesh (EUB)',
  description:
    'Explore the scholarly work, research papers, and academic journals from the faculty and students of the European University of Bangladesh (EUB). Access the EUB Journal and other publications across engineering, science, business, and social sciences.',
  keywords: [
    'EUB publications',
    'European University of Bangladesh research',
    'EUB Journal',
    'Academic journals Bangladesh',
    'University research papers',
    'Faculty publications EUB',
    'Dhaka university research',
    'Scholarly articles Bangladesh',
    'Engineering research',
    'Computer Science publications',
    'Business research papers',
    'Social sciences journal',
  ],
  pageUrl: 'https://eub.edu.bd/publications',
});

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
