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

import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import data from '../_const/data';

const Content = () => {
  return (
    <div className='space-y-8'>
      <div className='flex justify-between gap-8'>
        <Input
          placeholder='Search for job title, faculty, category, location'
          className='w-[400px]'
        />

        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a faculty' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='faculty-of-business-administration'>
              Faculty of Business Administration
            </SelectItem>
            <SelectItem value='faculty-of-arts-social-sciences'>
              Faculty of Arts & Social Sciences
            </SelectItem>
            <SelectItem value='faculty-of-engineering'>
              Faculty of Engineering
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Accordion type='single' collapsible className='w-full '>
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              iconClassName='text-primary'
              className='bg-accent border-b text-primary text-lg px-6 py-3'
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className='px-6 py-4  text-base bg-background'>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
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
  );
};

export default Content;
