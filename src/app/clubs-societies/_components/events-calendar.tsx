'use client';

import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/common-table';
import Link from 'next/link';

const EventsCalendar = () => {
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

  return <SystemTable data={data} columns={columns} />;
};

export default EventsCalendar;
