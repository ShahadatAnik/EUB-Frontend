'use client';

import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import Link from 'next/link';
import { IDataTable } from '@/types';
import { formatDate } from '@/lib/utils';

const EventsCalendar = () => {
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

  return <SystemTable data={data} columns={columns} />;
};

export default EventsCalendar;
