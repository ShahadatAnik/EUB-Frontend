import React from 'react';
import Link from 'next/link';

import ContentWrapper from '../content-wrapper';
import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const data = [
  {
    description: 'Class Routine',
    updatedAt: '2022-01-01',
  },
];

const columns: SystemTableColumn[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: (value) => (
      <Link href={value} className='underline text-primary font-medium'>
        {' '}
        Test Pdf
      </Link>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
  },
];

const ClassRoutine = () => {
  return (
    <ContentWrapper title='Class Routine'>
      <SystemTable caption='Class Routine' data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
