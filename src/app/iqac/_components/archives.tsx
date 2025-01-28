import React from 'react';
import Link from 'next/link';

import ContentWrapper from './content-wrapper';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const columns: SystemTableColumn[] = [
  {
    accessorKey: 'description',
    cell: (value) => (
      <Link className='underline text-primary font-medium' href={value}>
        Test Pdf
      </Link>
    ),
  },
  {
    accessorKey: 'updated_at',
    cell: (value) => value,
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

const Archives = () => {
  return (
    <ContentWrapper title='Archives' className='py-2'>
      <SystemTable data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default Archives;
