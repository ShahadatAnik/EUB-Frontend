'use client';

import React from 'react';
import Link from 'next/link';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import Title from '@/components/title';

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
        <Title title='NSBR' className='text-2xl' />
        <div className='pl-4 text-base   flex flex-col space-y-2'>
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
