'use client';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { IPolicy } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';

import Search from '@/components/search';
import ServerPagination from '@/components/server-pagination';
import { IPolicyResponse } from '@/server/get/get-policy';

const columns: SystemTableColumn<IPolicy>[] = [
  {
    accessorKey: 'name',
    header: 'Job Title',
  },

  {
    accessorKey: 'department',
    header: 'Department',
  },

  {
    accessorKey: 'published_date',
    header: 'Published Date',
    type: 'date',
  },

  {
    accessorKey: 'file',
    header: 'Action',
    cell: (pdf) => <PdfDownloadButton pdf={pdf} />,
  },
];

const Content: React.FC<IPolicyResponse> = (res) => {
  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Search placeholder='Search for name, department, published date' />
      </div>

      <SystemTable columns={columns} data={res.data} />

      <div className='flex justify-center'>
        <ServerPagination pagination={res.pagination} />
      </div>
    </div>
  );
};

export default Content;
