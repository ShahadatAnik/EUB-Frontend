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

import { data } from '../_const/data';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { IPolicy } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';

const columns: SystemTableColumn<IPolicy>[] = [
  {
    accessorKey: 'name',
    header: 'Policy Name',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'published_date',
    header: 'Published Date',
    headerClassName: 'w-[120px]',
  },

  {
    accessorKey: 'pdf',
    header: 'Action',
    cell: (value) => {
      return <PdfDownloadButton pdf={value} />;
    },
    headerClassName: 'w-[100px]',
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

      <SystemTable data={data} columns={columns} />

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
