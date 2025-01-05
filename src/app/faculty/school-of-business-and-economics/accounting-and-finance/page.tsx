import React from 'react';

import PageHeader from '@/components/page-header';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import faculty from '@/lib/faculty.json';
import FacultyCard from '@/components/cards/faculty-card';

const Page = () => {
  return (
    <>
      <PageHeader image='/images/news-portal/13.jpg' title='Faculty Members' />

      <div className='container py-10'>
        <div className='grid lg:grid-cols-2  gap-8 mb-8'>
          {faculty.map((item, index) => (
            <FacultyCard key={index} item={item} />
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
      </div>
    </>
  );
};

export default Page;
