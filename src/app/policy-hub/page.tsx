import React from 'react';

import { getPolicy } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/policy-hub',
  title:
    'EUB Policy Hub | Official Policies | European University of Bangladesh',
  description:
    'Access the official policies and guidelines of the European University of Bangladesh. Find documents related to academic, administrative, and student affairs.',
  keywords: [
    'EUB policy hub',
    'University policies Bangladesh',
    'Academic policy EUB',
    'Student code of conduct',
    'University regulations',
    'Official guidelines EUB',
    'EUB governance',
    'Campus policy',
  ],
});

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
