import React from 'react';

import Link from 'next/link';

import { IDataTable } from '@/types';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

import { formatDate } from '@/lib/utils';

import ContentWrapper from './content-wrapper';

const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: 'description',
    cell: (value) => (
      <Link className='font-medium text-primary underline' href={value}>
        Test Pdf
      </Link>
    ),
  },
  {
    accessorKey: 'updated_at',
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

const data = [
  {
    description: '/pdf/test.pdf',
    updated_at: '2021-09-01',
  },
  {
    description: '/pdf/test.pdf',
    updated_at: '2021-09-01',
  },
];

const Manuals = () => {
  return (
    <ContentWrapper title='Manuals' className='py-2'>
      <SystemTable data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default Manuals;
