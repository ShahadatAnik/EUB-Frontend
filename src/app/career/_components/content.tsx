'use client';

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

import { jobsOpening } from '../_const/data';
import { Button } from '@/components/ui/button';
import SystemTable, {
  SystemTableColumn,
} from '@/components/table/common-table';

const columns: SystemTableColumn[] = [
  {
    accessorKey: 'title',
    header: 'Job Title',
  },

  {
    accessorKey: 'faculty',
    header: 'Faculty',
  },

  {
    accessorKey: 'category',
    header: 'Category',
  },

  {
    accessorKey: 'location',
    header: 'Location',
  },

  {
    accessorKey: 'deadline',
    header: 'Deadline',
  },

  {
    accessorKey: 'action',
    header: 'Action',
    cell: (props) => {
      return <Button size={'sm'}>View Details</Button>;
    },
  },
];

const Content = () => {
  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Input
          type='search'
          placeholder='Search for job title, faculty, category, location'
          className='w-[400px]'
        />
      </div>

      <SystemTable data={jobsOpening} columns={columns} />

      <div className='flex justify-center'>
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
    </div>
  );
};

export default Content;
