'use client';

import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { IPublicationResponse } from '@/server/get/get-publications';
import Search from '@/components/search';
import { useSearchParams } from 'next/navigation';
import RichTextViewer from '@/components/rich-text-viewer';
import { IClubAndSociety } from '@/types';

const Content: React.FC<
  IPublicationResponse & { faculties: IClubAndSociety[] }
> = (res) => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div className='space-y-8'>
      <div className='flex justify-between gap-8'>
        <Search placeholder='Search for name, faculty' />
        <Select onValueChange={(res) => console.log(res)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a faculty' />
          </SelectTrigger>
          <SelectContent>
            {res.faculties.map((faculty, index) => (
              <SelectItem key={index} value={faculty.value}>
                {faculty.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Accordion type='single' collapsible className='w-full '>
        {res.data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              iconClassName='text-primary'
              className='bg-accent border-b text-primary text-lg px-6 py-3'
            >
              {item.label}
            </AccordionTrigger>
            <AccordionContent className='px-6 py-4  text-base bg-background'>
              <RichTextViewer content={item.value} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className='flex justify-center'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            {Array.from({ length: res.pagination.total_page }, (_, i) => (
              <PaginationLink
                key={i}
                href={
                  q
                    ? `publications?page=${i + 1}&q=${q}`
                    : `publications?page=${i + 1}`
                }
              >
                {i + 1}
              </PaginationLink>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Content;
