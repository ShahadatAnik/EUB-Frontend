'use client';

import React from 'react';

import { IPagination } from '@/types';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { Button } from './ui/button';

const ClientPagination: React.FC<{
  pagination: IPagination;
  setPage: (page: number) => void;
}> = ({ pagination: { current_page, total_page }, setPage }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => setPage(current_page - 1)}
            variant={'ghost'}
            disabled={current_page === 1}
          >
            <PaginationPrevious href={'#'} />
          </Button>
        </PaginationItem>
        {Array.from({ length: total_page > 5 ? 5 : total_page }, (_, i) => (
          <Button
            onClick={() => setPage(i + 1)}
            variant={'ghost'}
            size={'icon'}
            key={i}
          >
            <PaginationLink href={'#'}>{i + 1}</PaginationLink>
          </Button>
        ))}

        {total_page > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <Button
            onClick={() => setPage(current_page + 1)}
            variant={'ghost'}
            disabled={current_page === total_page}
          >
            <PaginationNext href={'#'} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ClientPagination;
