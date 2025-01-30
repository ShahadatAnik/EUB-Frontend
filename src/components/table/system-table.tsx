/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type SystemTableColumn<T> = {
  accessorKey?: keyof T;
  header?: string;
  headerClassName?: string;
  cell?: (
    value: string,
    row: T,
    index: number
  ) => string | number | React.ReactNode;
  cellClassName?: string;
};

interface IProps<T> {
  columns: SystemTableColumn<T>[];
  data: Record<string, string | React.ReactNode>[] | T[];
  caption?: string;
  className?: string;
}

function SystemTable<T>({ columns, data, caption, className }: IProps<T>) {
  const headers = columns.map((column) => column.header || column.accessorKey);
  return (
    <Table className={cn('border', className)}>
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
              {String(header).replace(/_/g, ' ')}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: any, rowIndex: number) => (
          <TableRow key={rowIndex}>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                className={cn('border-r last:border-r-0', column.cellClassName)}
              >
                {column.cell
                  ? column.cell(
                      item[column.accessorKey] as string,
                      item as T as any,
                      rowIndex
                    )
                  : item[column.accessorKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SystemTable;
