import React from 'react';

import { getNotices } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  pageUrl: '/notices',
  title:
    'EUB Official Notices & Announcements | European University of Bangladesh',
  description:
    'Stay updated with the latest official notices and announcements from EUB. Find information on exams, holidays, class schedules, and other important updates.',
  keywords: [
    'EUB official notices',
    'European University of Bangladesh announcements',
    'University notice board',
    'EUB exam notice',
    'EUB holiday notice',
    'Academic announcements Bangladesh',
    'Student notices EUB',
    'Latest university updates',
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

  const data = await getNotices({
    page,
    limit,
    q,
  });

  return (
    <>
      <PageHeader className='object-contain' title='Notices' />

      <PageContainer>
        <Content {...data} />
      </PageContainer>
    </>
  );
}
