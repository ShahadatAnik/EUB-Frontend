import React from 'react';
import Link from 'next/link';

import ContentWrapper from './content-wrapper';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { IDataTable } from '@/types';
import { formatDate } from '@/lib/utils';

const columns: SystemTableColumn<IDataTable>[] = [
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

const UgcObeTemplate = () => {
  return (
    <ContentWrapper title='UGC OBE Template' className='py-2'>
      <SystemTable data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default UgcObeTemplate;
