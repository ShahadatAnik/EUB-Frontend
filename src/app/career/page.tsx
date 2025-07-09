import React from 'react';

import { getJobCirculars } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/career',
  title: 'Careers at EUB | Job Openings | European University of Bangladesh',
  description:
    'Explore career opportunities at the European University of Bangladesh. Find academic, faculty, and administrative job openings and apply to join our team.',
  keywords: [
    'Careers at EUB',
    'University job openings Bangladesh',
    'Faculty jobs Dhaka',
    'Academic careers',
    'EUB job circular',
    'Lecturer jobs in Bangladesh',
    'University administrative jobs',
    'Apply for a job at EUB',
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

  const data = await getJobCirculars({
    page,
    limit,
    q,
  });

  return (
    <>
      <PageHeader title='Careers at EUB' />

      <PageContainer>
        <Content {...data} />
      </PageContainer>
    </>
  );
}
