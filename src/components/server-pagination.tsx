'use client';

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
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { IPagination } from '@/types';

const ServerPagination: React.FC<{ pagination: IPagination }> = ({
  pagination: { current_page, total_page },
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant={'ghost'} disabled={current_page === 1}>
            <PaginationPrevious
              href={
                q
                  ? `${pathName}?page=${current_page - 1}&q=${q}`
                  : `${pathName}?page=${current_page - 1}`
              }
            />
          </Button>
        </PaginationItem>
        {Array.from({ length: total_page > 5 ? 5 : total_page }, (_, i) => (
          <PaginationLink
            key={i}
            href={
              q
                ? `${pathName}?page=${i + 1}&q=${q}`
                : `${pathName}?page=${i + 1}`
            }
          >
            {i + 1}
          </PaginationLink>
        ))}

        {total_page > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <Button variant={'ghost'} disabled={current_page === total_page}>
            <PaginationNext
              href={
                q
                  ? `${pathName}?page=${current_page + 1}&q=${q}`
                  : `${pathName}?page=${current_page + 1}`
              }
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ServerPagination;
