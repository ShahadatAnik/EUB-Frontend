import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ElectiveCourse } from '../../_config/types';

interface ElectiveCourseTableProps {
  courses: ElectiveCourse[];
  totalCredits: number;
}

export const ElectiveCourseTable = React.memo<ElectiveCourseTableProps>(
  ({ courses, totalCredits }) => {
    return (
      <div className='border rounded-lg overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className='bg-primary hover:bg-primary '>
              <TableHead className='w-16 text-white border-r font-semibold text-center'>
                Sl.
              </TableHead>
              <TableHead className='w-32 text-white border-r font-semibold'>
                Course Code
              </TableHead>
              <TableHead className='border-r text-white font-semibold'>
                Course Title
              </TableHead>
              <TableHead className='w-20 text-white font-semibold text-center'>
                Credits
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <React.Fragment key={course.sl}>
                {course.codes.map((code, index) => (
                  <TableRow key={`${code}-${index}`}>
                    {index === 0 && (
                      <TableCell
                        rowSpan={course.codes.length}
                        className='border-r text-center font-medium border-b'
                      >
                        {course.sl}
                        <br />
                        <span className='text-xs text-gray-500'>(Any one)</span>
                      </TableCell>
                    )}
                    <TableCell className='border-r font-mono text-sm'>
                      {code}
                    </TableCell>
                    <TableCell className='border-r'>
                      {course.titles[index]}
                    </TableCell>
                    {index === 0 && (
                      <TableCell
                        rowSpan={course.codes.length}
                        className='text-center font-medium border-b'
                      >
                        {course.credits}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
            <TableRow className='bg-gray-100 font-semibold border-t-2'>
              <TableCell colSpan={3} className='border-r text-right'>
                Total
              </TableCell>
              <TableCell className='text-center'>{totalCredits}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
);

ElectiveCourseTable.displayName = 'ElectiveCourseTable';
