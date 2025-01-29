'use client';

import React from 'react';
import Link from 'next/link';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

import { IAcademicCalendar } from '@/types';

const columns: SystemTableColumn<IAcademicCalendar>[] = [
  {
    accessorKey: 'description',
    cell: (value, row) => (
      <Link
        className='underline text-primary font-medium'
        href={row.file || ''}
      >
        {value}
      </Link>
    ),
  },
  {
    accessorKey: 'updated_at',
    cell: (value) => value,
  },
];

const Content: React.FC<{ data: IAcademicCalendar[] }> = ({ data }) => {
  return <SystemTable data={data} columns={columns} />;
};

export default Content;
