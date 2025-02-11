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

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { ICareer } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';
import { IJobCircularResponse } from '@/server/getJobCirculars';

import { useSearchParams } from 'next/navigation';
import Search from '@/components/search';

const columns: SystemTableColumn<ICareer>[] = [
  {
    accessorKey: 'title',
    header: 'Job Title',
  },

  {
    accessorKey: 'faculty_name',
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
    accessorKey: 'file',
    header: 'Action',
    cell: (pdf) => <PdfDownloadButton pdf={pdf} />,
  },
];

const Content: React.FC<IJobCircularResponse> = (res) => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Search placeholder='Search for job title, faculty, category, location' />
      </div>

      <SystemTable data={res.data} columns={columns} />

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
                  q ? `career?page=${i + 1}&q=${q}` : `career?page=${i + 1}`
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
