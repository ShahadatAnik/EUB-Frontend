import React from 'react';

import { INewsPortal } from '@/types';

import { getNewsEvents } from '@/server/get';

import NoDataFound from '@/components/no-data-found';
import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';
import ServerPagination from '@/components/server-pagination';

import { generateMetaData } from '@/lib/utils';

import NewsCard from '@/app/(top-navbar)/news-events/_components/news-card';

type searchParamsProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export const metadata = generateMetaData({
  title: 'Latest News & Events | European University of Bangladesh (EUB)',
  description:
    'Stay updated with the latest news, events, workshops, and announcements from the EUB campus. See our student achievements and admission circulars.',
  keywords: [
    'EUB news',
    'European University of Bangladesh events',
    'EUB latest news',
    'EUB admission circular',
    'Dhaka university news',
    'EUB campus life',
    'University workshops Dhaka',
    'EUB Tech Fest',
    'Academic news Bangladesh',
    'EUB announcements',
    'University events calendar',
    'Student achievements EUB',
  ],
  pageUrl: '/news-events',
});

export default async function Page({ searchParams }: searchParamsProps) {
  const limit = 12;

  const params = await searchParams;
  const page = Number(params?.page ? params?.page : 1);

  const data = await getNewsEvents(limit, page);

  if (!data || !data.data || !data.data.length) return <NoDataFound />;

  return (
    <div>
      <PageHeader title='News & Events' className='object-contain' />
      <PageContainer>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {data.data.map((item: INewsPortal, index: number) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
        <ServerPagination pagination={data.pagination} />
      </PageContainer>
    </div>
  );
}
