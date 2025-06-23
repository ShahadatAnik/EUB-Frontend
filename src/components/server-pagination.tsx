'use client';

import React from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

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

const createPageUrl = (
  pathName: string,
  page: number,
  searchParams: URLSearchParams
) => {
  const params = new URLSearchParams(searchParams.toString()); // clone to avoid mutating original
  params.set('page', page.toString());
  return `${pathName}?${params.toString()}`;
};

const ServerPagination: React.FC<{ pagination: IPagination }> = ({
  pagination: { current_page, total_page },
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  return (
    <Pagination>
      <PaginationContent className='w-full md:max-w-fit'>
        <PaginationItem>
          <Button variant={'ghost'} disabled={current_page === 1}>
            <PaginationPrevious
              href={createPageUrl(pathName, current_page - 1, searchParams)}
            />
          </Button>
        </PaginationItem>

        <div className='flex flex-1 items-center gap-2 overflow-x-auto'>
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
                  href={createPageUrl(pathName, page, searchParams)}
                  className={
                    isSelected
                      ? 'rounded border-2 border-primary shadow-lg'
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
          <Button
            variant={'ghost'}
            disabled={total_page === 0 || current_page === total_page}
          >
            <PaginationNext
              href={createPageUrl(pathName, current_page + 1, searchParams)}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ServerPagination;
