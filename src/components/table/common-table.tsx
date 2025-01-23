import React from 'react';

import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

export type SystemTableColumn = {
  accessorKey: string;
  header?: string;
  headerClassName?: string;
  cell?: (value: string) => string | React.ReactNode;
  cellClassName?: string;
};

interface IProps {
  columns: SystemTableColumn[];
  data: Record<string, string | React.ReactNode>[];
  caption?: string;
}

const SystemTable: React.FC<IProps> = ({ columns, data, caption }) => {
  const headers = columns.map((column) => column.header || column.accessorKey);
  return (
    <Table className='border'>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={cn(
                'text-white capitalize font-medium',
                index !== data.length && 'border-r',
                columns[index].headerClassName
              )}
            >
              {header.replace(/_/g, ' ')}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                className={cn(
                  index !== data.length && 'border-r',
                  column.cellClassName
                )}
              >
                {column.cell
                  ? column.cell(item[column.accessorKey] as string)
                  : item[column.accessorKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SystemTable;
