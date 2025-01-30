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
import { ITender } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';

const columns: SystemTableColumn<ITender>[] = [
  {
    header: 'Serial No',
    cell: (_, row, index) => index + 1,
    headerClassName: 'w-[80px]',
  },

  {
    accessorKey: 'code',
    header: 'Code',
    headerClassName: 'w-[100px]',
  },

  {
    accessorKey: 'type',
    header: 'Type',
    headerClassName: 'w-[200px]',
  },

  {
    accessorKey: 'title',
    header: 'Title',
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

const StdForGoods = () => {
  return (
    <div id='std-for-goods' className='space-y-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold text-primary'>
          Standard Tender Documents (STD) for Goods
        </h2>
        <Input
          type='search'
          placeholder='e.g. Code, Type, Title'
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

export default StdForGoods;
