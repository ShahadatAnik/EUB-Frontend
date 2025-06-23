import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Semester } from '../../_config/curriculum';

interface SemesterSummaryTableProps {
  semesters: Semester[];
}

export const SemesterSummaryTable = React.memo<SemesterSummaryTableProps>(
  ({ semesters }) => {
    const totalCredits = semesters.reduce(
      (sum, semester) => sum + semester.total,
      0
    );

    return (
      <div className='mt-6'>
        <h4 className='font-semibold mb-3 text-gray-700'>Year Summary</h4>
        <div className='border rounded-lg overflow-hidden bg-white'>
          <Table>
            <TableHeader>
              <TableRow className='bg-blue-50'>
                <TableHead className='border-r font-semibold text-blue-900'>
                  Semester
                </TableHead>
                <TableHead className='border-r font-semibold text-blue-900 text-center'>
                  Courses
                </TableHead>
                <TableHead className='font-semibold text-blue-900 text-center'>
                  Credits
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {semesters.map((semester, index) => (
                <TableRow
                  key={`${semester.year}-${semester.semester}`}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}
                >
                  <TableCell className='border-r font-medium'>
                    {semester.title}
                  </TableCell>
                  <TableCell className='border-r text-center'>
                    {semester.courses.length}
                  </TableCell>
                  <TableCell className='text-center font-semibold'>
                    {semester.total}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className='bg-blue-100 border-t-2 border-blue-200'>
                <TableCell className='border-r font-bold text-blue-900'>
                  Year Total
                </TableCell>
                <TableCell className='border-r text-center font-bold text-blue-900'>
                  {semesters.reduce(
                    (sum, semester) => sum + semester.courses.length,
                    0
                  )}
                </TableCell>
                <TableCell className='text-center font-bold text-blue-900'>
                  {totalCredits}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
);

SemesterSummaryTable.displayName = 'SemesterSummaryTable';
