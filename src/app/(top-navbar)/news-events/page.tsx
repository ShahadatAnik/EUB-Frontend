import React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';

import { INewsPortal } from '@/types';
import NewsCard from '@/app/(top-navbar)/news-events/_components/news-card';
import { getNewsEvents } from '@/server/getNewsEvents';

export default async function Page() {
  const data = await getNewsEvents();

  return (
    <div>
      <PageHeader title='News & Events' image='/images/bg-2.jpg' />
      <PageContainer>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item: INewsPortal, index: number) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </PageContainer>
    </div>
  );
}
