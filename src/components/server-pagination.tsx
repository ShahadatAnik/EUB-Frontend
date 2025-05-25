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
import { IPagination } from '@/types';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

const ServerPagination: React.FC<{ pagination: IPagination }> = ({
  pagination: { current_page, total_page },
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <Pagination>
      <PaginationContent className='w-full md:max-w-fit'>
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

        <div className='flex-1  overflow-x-auto flex items-center gap-2'>
          {(() => {
            let start = 1;
            let end = 5;

            if (total_page <= 5) {
              start = 1;
              end = total_page;
            } else if (current_page <= 3) {
              start = 1;
              end = 5;
            } else if (current_page + 2 >= total_page) {
              start = total_page - 4;
              end = total_page;
            } else {
              start = current_page - 2;
              end = current_page + 2;
            }

            return Array.from({ length: end - start + 1 }, (_, i) => {
              const page = start + i;
              const isSelected = page === current_page;
              return (
                <PaginationLink
                  key={page}
                  href={
                    q
                      ? `${pathName}?page=${page}&q=${q}`
                      : `${pathName}?page=${page}`
                  }
                  className={
                    isSelected
                      ? 'shadow-lg border-2 border-primary rounded '
                      : ''
                  }
                  // If your PaginationLink doesn't accept className, wrap it in a <div> or <span> with the class
                >
                  {page}
                </PaginationLink>
              );
            });
          })()}
        </div>

        {total_page > 5 && (
          <PaginationItem className='hidden md:inline-flex'>
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
