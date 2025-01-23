'use client';

import React from 'react';
import Link from 'next/link';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/common-table';

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

const Content = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h6 className='text-2xl font-semibold text-primary py-2 px-6 border-l-4 bg-accent border-primary'>
          NSBR
        </h6>
        <div className='pl-4 mt-4 text-base   flex flex-col space-y-2'>
          <Link href={'#'} className='underline text-primary'>
            NSBR Copy Right Agreement
          </Link>
          <Link href={'#'} className='underline text-primary'>
            NSBR Administration, Policy, and Guideline
          </Link>
          <Link href={'#'} className='underline text-primary'>
            NSBR Publication Ethics and Malpractices Statement for NSBR
          </Link>
        </div>
      </div>
      <SystemTable data={data} columns={columns} />
    </div>
  );
};

export default Content;
