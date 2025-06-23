'use client';

import { ICareer } from '@/types';

import { IJobCircularResponse } from '@/server/get/get-job-circulars';

import PdfDownloadButton from '@/components/pdf-download-btn';
import Search from '@/components/search';
import ServerPagination from '@/components/server-pagination';
import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const columns: SystemTableColumn<ICareer>[] = [
  {
    accessorKey: 'title',
    header: 'Job Title',
  },

  // {
  //   accessorKey: 'faculty_name',
  //   header: 'Faculty',
  // },

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
  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Search placeholder='Search for job title, faculty, category, location' />
      </div>

      <SystemTable data={res.data} columns={columns} />

      <div className='flex justify-center'>
        <ServerPagination pagination={res.pagination} />
      </div>
    </div>
  );
};

export default Content;
