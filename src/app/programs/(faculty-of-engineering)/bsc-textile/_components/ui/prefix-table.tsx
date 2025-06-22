import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CoursePrefix } from '../regular-program/_config/types';

interface PrefixTableProps {
  prefixes: CoursePrefix[];
}

export const PrefixTable = React.memo<PrefixTableProps>(({ prefixes }) => {
  return (
    <div className='border rounded-lg overflow-hidden max-w-2xl'>
      <Table>
        <TableHeader>
          <TableRow className='bg-primary hover:bg-primary '>
            <TableHead className='text-white w-32 border-r font-semibold'>
              Letter Symbol
            </TableHead>
            <TableHead className='text-white font-semibold'>
              Subject Name
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prefixes.map((prefix) => (
            <TableRow key={prefix.symbol}>
              <TableCell className='border-r font-mono font-semibold text-center'>
                {prefix.symbol}
              </TableCell>
              <TableCell>{prefix.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

PrefixTable.displayName = 'PrefixTable';
