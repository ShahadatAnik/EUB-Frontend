import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { cn } from '@/lib/utils';

import { Prerequisite } from '../../_config/curriculum';

interface PrerequisiteCourseTableProps {
  courses: Prerequisite[];
  totalCredits: number;
  showTotal?: boolean;
  caption?: string;
}

export const PrerequisiteCourseTable = React.memo<PrerequisiteCourseTableProps>(
  ({ courses, totalCredits, showTotal = true, caption }) => {
    return (
      <div className='overflow-auto border'>
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            <TableRow className='bg-primary hover:bg-primary'>
              <TableHead className='w-32 border-r text-center font-medium text-white'>
                Course Code
              </TableHead>
              <TableHead className='w-80 border-r text-center font-medium text-white'>
                Course Title
              </TableHead>
              <TableHead className=' w-48  border-r font-medium text-white'>
                Prerequisite Course Code
              </TableHead>
              <TableHead className='border-r font-medium text-white'>
                Prerequisite Course Title
              </TableHead>
              <TableHead className='text-center font-medium text-white'>
                Credit
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map(({ course, prerequisites }) => {
              const totalRows = prerequisites.length; // +1 for semester total
              return (
                <React.Fragment key={`${course.code}-${course.title}`}>
                  {/* Course rows */}
                  {prerequisites.map((prerequisite, courseIndex) => (
                    <TableRow
                      key={`${prerequisite.code}-${prerequisite.title}-${courseIndex}`}
                    >
                      {/* Prerequisite rows */}
                      <TableCell
                        rowSpan={courseIndex === 0 && totalRows ? totalRows : 1}
                        className={cn(
                          'align-center border-r bg-primary/5 text-center font-medium',
                          courseIndex !== 0 && 'hidden'
                        )}
                      >
                        {course.code}
                      </TableCell>
                      <TableCell
                        rowSpan={courseIndex === 0 && totalRows ? totalRows : 1}
                        className={cn(
                          'border-r text-center font-medium',
                          courseIndex !== 0 && 'hidden'
                        )}
                      >
                        {course.title}
                      </TableCell>
                      <TableCell className='border-r font-mono text-sm font-medium'>
                        {prerequisite.code}
                      </TableCell>
                      <TableCell className='border-r text-sm'>
                        {prerequisite.title}
                      </TableCell>
                      <TableCell className='text-center font-medium'>
                        {prerequisite.credits}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              );
            })}

            {/* Total row */}
            {showTotal && (
              <TableRow className='border-t-2 bg-primary font-bold hover:bg-primary'>
                <TableCell
                  colSpan={4}
                  className='border-r pr-4 text-right text-white'
                >
                  Total
                </TableCell>
                <TableCell className='text-center text-white'>
                  {totalCredits}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
);

PrerequisiteCourseTable.displayName = 'CourseTable';
