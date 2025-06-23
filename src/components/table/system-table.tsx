/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';

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
import { Skeleton } from '../ui/skeleton';

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
  cellClassName?:
    | string
    | ((
        row: T,
        index: number,
        isFirstRow: boolean,
        isLastRow: boolean
      ) => string);
  type?: CellType;
  rowSpan?: (
    row: T,
    index: number,
    isFirstRow: boolean,
    isLastRow: boolean
  ) => number;
  colSpan?: (
    row: T,
    index: number,
    isFirstRow: boolean,
    isLastRow: boolean
  ) => number;
  skipRender?: (row: T, index: number) => boolean;
  isHidden?: boolean;
};

interface IProps<T> {
  columns: SystemTableColumn<T>[];
  data: Record<string, string | React.ReactNode>[] | T[];
  caption?: string;
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  groupedRows?: boolean;
  rowClassName?: (row: T, index: number) => string;
}

// Simple NoDataFound component since it's not provided
const NoDataFound = () => (
  <div className='flex flex-col items-center justify-center py-8 text-gray-500'>
    <div className='text-lg font-medium'>No Data Found</div>
    <div className='text-sm'>There are no records to display</div>
  </div>
);

function SystemTable<T>({
  columns,
  data,
  caption,
  className,
  children,
  isLoading,
  rowClassName,
}: IProps<T>) {
  const headers = columns
    .filter((column) => column.isHidden !== true)
    .map((column) => column.header || column.accessorKey);

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
        {isLoading && (
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} className='border-r last:border-r-0'>
                <Skeleton className='h-8 w-full' />
              </TableCell>
            ))}
          </TableRow>
        )}

        {(!data || !data.length) && !isLoading && (
          <TableRow>
            <TableCell colSpan={headers.length} className='text-center'>
              <NoDataFound />
            </TableCell>
          </TableRow>
        )}

        {!isLoading &&
          data &&
          data.map((item: any, rowIndex: number) => (
            <TableRow
              key={rowIndex}
              className={
                rowClassName ? rowClassName(item as T, rowIndex) : undefined
              }
            >
              {columns
                .filter((column) => column.isHidden !== true)
                .map((column, colIndex) => {
                  // Skip rendering if skipRender function returns true
                  if (
                    column.skipRender &&
                    column.skipRender(item as T, rowIndex)
                  ) {
                    return null;
                  }

                  const rowSpan = column.rowSpan
                    ? column.rowSpan(
                        item as T,
                        rowIndex,
                        rowIndex === 0,
                        rowIndex === data.length - 1
                      )
                    : 1;
                  const cellValue = item[column.accessorKey as string];

                  return (
                    <TableCell
                      key={colIndex}
                      className={cn(
                        'border-r last:border-r-0',
                        typeof column.cellClassName === 'function'
                          ? column.cellClassName(
                              item as T,
                              rowIndex,
                              rowIndex === 0,
                              rowIndex === data.length - 1
                            )
                          : column.cellClassName
                      )}
                      rowSpan={rowSpan > 1 ? rowSpan : undefined}
                      colSpan={
                        column.colSpan
                          ? column.colSpan(
                              item as T,
                              rowIndex,
                              rowIndex === 0,
                              rowIndex === data.length - 1
                            )
                          : 1
                      }
                    >
                      {column.cell ? (
                        column.cell(cellValue as string, item as T, rowIndex)
                      ) : (
                        <RenderCell type={column.type} value={cellValue} />
                      )}
                    </TableCell>
                  );
                })}
            </TableRow>
          ))}
      </TableBody>

      {children && <>{children}</>}
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
      return <>{Number(value) === 0 ? '-' : Number(value).toFixed(2)}</>;
    case 'date':
      return <>{format(new Date(value as string), 'dd/MM/yy')}</>;
    case 'currency':
      return (
        <NumericFormat
          readOnly
          disabled
          decimalScale={2}
          className={cn(
            'bg-transparent block w-full',
            value === 0 ? 'text-center' : ''
          )}
          value={(value as number) === 0 ? '-' : (value as number)}
          allowLeadingZeros
          thousandSeparator=','
        />
      );
    default:
      return <>{value as React.ReactNode}</>;
  }
};
