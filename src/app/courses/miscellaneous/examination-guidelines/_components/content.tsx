'use client';

import React from 'react';
import Link from 'next/link';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

import { IDataTable } from '@/types';
import { formatDate } from '@/lib/utils';
import { useExaminationGuidelines } from '../_const/query';

const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: 'description',
    cell: (value, row) => {
      return (
        <Link className='underline text-primary font-medium' href={row.file}>
          {value}
        </Link>
      );
    },
  },
  {
    accessorKey: 'updated_at',
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

const Content: React.FC<{ initialData: IDataTable[] }> = ({ initialData }) => {
  const { data } = useExaminationGuidelines({ initialData });

  return <SystemTable data={data} columns={columns} />;
};

export default Content;
