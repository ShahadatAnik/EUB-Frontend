'use client';

import { useState } from 'react';

import { useDebounceValue } from 'usehooks-ts';

import { Input } from '@/components/ui/input';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { ITender } from '@/types';
import PdfDownloadButton from '@/components/pdf-download-btn';
import { useQuery } from '@tanstack/react-query';
import { getTenders } from '@/server/get';
import ClientPagination from '@/components/client-pagination';

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
    type: 'date',
  },

  {
    accessorKey: 'file',
    header: 'Action',
    cell: (value) => {
      return <PdfDownloadButton pdf={value} />;
    },
    headerClassName: 'w-[100px]',
  },
];

interface ITenderProps {
  title: string;
  type: 'std_for_goods' | 'std_for_works' | 'safe' | 'evaluation';
}

const Tender: React.FC<ITenderProps> = ({ title, type }) => {
  const [debouncedValue, setValue] = useDebounceValue('', 500);

  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['tenders', type, page, limit, debouncedValue],
    queryFn: async () =>
      await getTenders({ page, limit, q: debouncedValue, table_name: type }),
  });

  return (
    <div id={type} className='space-y-8'>
      <div className='flex flex-col gap-2 lg:flex-row justify-between lg:items-center'>
        <h2 className='text-lg lg:text-2xl font-semibold text-primary'>
          {title}
        </h2>
        <Input
          onChange={(e) => setValue(e.target.value)}
          type='search'
          placeholder='e.g. Code, Type, Title'
          className='lg:w-[400px]'
        />
      </div>

      <SystemTable
        isLoading={isLoading}
        data={data?.data || []}
        columns={columns}
      />

      <div className='flex justify-center'>
        {isLoading
          ? null
          : data && (
              <ClientPagination
                pagination={data?.pagination}
                setPage={setPage}
              />
            )}
      </div>
    </div>
  );
};

export default Tender;
