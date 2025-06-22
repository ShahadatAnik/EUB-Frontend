import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CurriculumSummary } from '../regular-program/_config/types';

interface SummaryTableProps {
  summaryData: CurriculumSummary[];
}

export const SummaryTable = React.memo<SummaryTableProps>(({ summaryData }) => {
  return (
    <div className='border rounded-lg overflow-hidden'>
      <Table>
        <TableHeader>
          <TableRow className='bg-primary hover:bg-primary '>
            <TableHead className='text-white border-r font-semibold'>
              Curriculum Summary
            </TableHead>
            <TableHead className='w-24 text-white border-r font-semibold text-center'>
              Credits
            </TableHead>
            <TableHead className='w-32 text-white font-semibold text-center'>
              Credit Proportions (Percentage)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {summaryData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='border-r whitespace-pre-line text-sm'>
                {item.category}
              </TableCell>
              <TableCell className='border-r text-center font-medium'>
                {item.credits.toFixed(2)}
              </TableCell>
              <TableCell className='text-center font-medium'>
                {item.percentage}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className='bg-gray-100 font-bold border-t-2'>
            <TableCell className='border-r'>Total</TableCell>
            <TableCell className='border-r text-center'>165.00</TableCell>
            <TableCell className='text-center'>100%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
});

SummaryTable.displayName = 'SummaryTable';
