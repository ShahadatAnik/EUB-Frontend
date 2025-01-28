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

export default async function Page() {
  const res = await fetch('http://103.147.163.46:4030/news/news-portal');
  const data = (await res.json()).data as INewsPortal[];

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
