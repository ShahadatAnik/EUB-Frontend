import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { generateMetaData } from '@/lib/utils';
import PageContainer from '@/components/page-container';

export const metadata = generateMetaData({
  title: 'Notices',
  description: 'The notices of the European University of Bangladesh',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Notices' />
      <PageContainer>
        <Content />
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
    </>
  );
};

export default Page;
