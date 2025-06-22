import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Course } from '../regular-program/_config/types';

interface CourseTableProps {
  courses: Course[];
  totalCredits: number;
  showTotal?: boolean;
}

export const CourseTable = React.memo<CourseTableProps>(
  ({ courses, totalCredits, showTotal = true }) => {
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
              <TableRow
                key={`${course.code}-${course.sl}`}
                // className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}
              >
                <TableCell className='border-r text-center font-medium'>
                  {course.sl}
                </TableCell>
                <TableCell className='border-r font-mono text-sm'>
                  {course.code}
                </TableCell>
                <TableCell className='border-r'>{course.title}</TableCell>
                <TableCell className='text-center font-medium'>
                  {course.credits}
                </TableCell>
              </TableRow>
            ))}
            {showTotal && (
              <TableRow className='bg-gray-100 font-semibold border-t-2'>
                <TableCell colSpan={3} className='border-r text-right'>
                  Total
                </TableCell>
                <TableCell className='text-center'>{totalCredits}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
);

CourseTable.displayName = 'CourseTable';
