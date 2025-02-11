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
import { IJobCircularResponse } from '@/server/getJobCirculars';
import { Suspense } from 'react';

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
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const { data } = useQuery({
  //   queryKey: ['job-circulars'],
  //   queryFn: async () =>
  //     await getJobCirculars({
  //       limit: searchParams.get('limit')
  //         ? Number(searchParams.get('limit'))
  //         : 10,
  //       page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  //       q: searchParams.get('q') || '',
  //     }),
  // });

  // console.log({ data });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='space-y-8'>
        <div className='flex justify-center'>
          <Input
            type='search'
            placeholder='Search for job title, faculty, category, location'
            className='w-[400px]'
            // onChange={(e) => {
            //   router.replace(`/career?q=${e.target.value}`, { scroll: false });
            // }}
          />
        </div>

        <SystemTable data={res.data} columns={columns} />

        <div className='flex justify-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              {Array.from({ length: res.pagination.total_page }, (_, i) => (
                <PaginationLink key={i} href={`career?page=${i + 1}`}>
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
    </Suspense>
  );
};

export default Content;
