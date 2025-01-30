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

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { ICareer } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';

const columns: SystemTableColumn<ICareer>[] = [
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
    type: 'date',
  },

  {
    accessorKey: 'pdf',
    header: 'Action',
    cell: (pdf) => <PdfDownloadButton pdf={pdf} />,
  },
];

const Content: React.FC<{ initialData: ICareer[] }> = ({ initialData }) => {
  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Input
          type='search'
          placeholder='Search for job title, faculty, category, location'
          className='w-[400px]'
        />
      </div>

      <SystemTable data={initialData} columns={columns} />

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
