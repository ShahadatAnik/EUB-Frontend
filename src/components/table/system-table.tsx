/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { NumericFormat } from 'react-number-format';

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
import { format } from 'date-fns';

type CellType = 'string' | 'number' | 'date' | 'currency' | 'default';

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
  type?: CellType;
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
                'text-white capitalize font-medium min-h-10 py-3 border-r last:border-r-0',
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
                {column.cell ? (
                  column.cell(
                    item[column.accessorKey] as string,
                    item as T as any,
                    rowIndex
                  )
                ) : (
                  <RenderCell
                    value={item[column.accessorKey]}
                    type={column.type}
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SystemTable;

const RenderCell = ({
  value,
  type = 'default',
}: {
  value: string | number | Date | React.ReactNode;
  type?: CellType;
}) => {
  switch (type) {
    case 'string':
      return <>{value?.toString()}</>;
    case 'number':
      return <>{Number(value).toFixed(2)}</>;
    case 'date':
      return <>{format(new Date(value as string), 'dd/MM/yy')}</>;
    case 'currency':
      return (
        <NumericFormat
          readOnly
          disabled
          decimalScale={2}
          className='bg-transparent block w-full'
          value={value as number}
          allowLeadingZeros
          thousandSeparator=','
        />
      );
    default:
      return <>{value as React.ReactNode}</>;
  }
};
