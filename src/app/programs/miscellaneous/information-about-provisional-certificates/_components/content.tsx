'use client';

import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { IDataTable } from '@/types';
import { formatDate } from '@/lib/utils';
import ClientPdfLink from '@/components/client-pdf';

const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: 'description',
    cell: (value, row) => <ClientPdfLink text={value} href={row.file} />,
  },
  {
    accessorKey: 'updated_at',
    cell: (value, row) => formatDate(value || row.created_at),
  },
];

const Content: React.FC<{ data: IDataTable[] }> = ({ data }) => {
  return <SystemTable data={data} columns={columns} />;
};

export default Content;
