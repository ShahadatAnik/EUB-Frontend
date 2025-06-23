'use client';

import React, { useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Semester } from '@/app/programs/_config/curriculum';

interface CourseMapSectionProps {
  semesterData: Semester[];
  backgroundStudents?: string;
}

export const CourseMapSection = React.memo<CourseMapSectionProps>(
  ({ semesterData, backgroundStudents }) => {
    const grandTotal = useMemo(
      () => semesterData.reduce((sum, semester) => sum + semester.total, 0),
      [semesterData]
    );

    const getYearOrdinal = (year: number) => {
      switch (year) {
        case 1:
          return '1st';
        case 2:
          return '2nd';
        case 3:
          return '3rd';
        case 4:
          return '4th';
        default:
          return `${year}th`;
      }
    };

    const groupedByYear = useMemo(() => {
      const grouped = semesterData.reduce((acc, semester) => {
        if (!acc[semester.year]) {
          acc[semester.year] = [];
        }
        acc[semester.year].push(semester);
        return acc;
      }, {} as Record<number, typeof semesterData>);

      // Sort semesters within each year
      Object.keys(grouped).forEach((year) => {
        grouped[Number.parseInt(year)].sort((a, b) => a.semester - b.semester);
      });

      return grouped;
    }, [semesterData]);

    return (
      <div>
        <h3 className='text-lg font-semibold mb-6 text-center'>
          Semester Wise Distribution of Courses (
          {backgroundStudents || 'For H.S.C. Background Students'})
        </h3>

        <div className='space-y-8'>
          {Object.entries(groupedByYear)
            .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
            .map(([year, semesters]) => {
              const yearTotal = semesters.reduce(
                (sum, semester) => sum + semester.total,
                0
              );

              return (
                <div key={year} className='mb-8'>
                  <h4 className='font-semibold mb-4'>
                    {getYearOrdinal(Number.parseInt(year))} Year ({yearTotal}{' '}
                    Credits)
                  </h4>

                  <div className='border  overflow-hidden'>
                    <Table>
                      <TableHeader>
                        <TableRow className='bg-primary hover:bg-primary'>
                          <TableHead className='text-white font-medium border-r w-32 text-center'>
                            Semester
                          </TableHead>
                          <TableHead className='text-white font-medium border-r w-20 text-center'>
                            Sl. No.
                          </TableHead>
                          <TableHead className='text-white font-medium border-r w-36'>
                            Course Code
                          </TableHead>
                          <TableHead className='text-white font-medium border-r'>
                            Course Title
                          </TableHead>
                          <TableHead className='text-white font-medium w-20 text-center'>
                            Credit
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {semesters.map((semester) => {
                          const totalRows = semester.courses.length + 1; // +1 for semester total

                          return (
                            <React.Fragment
                              key={`${semester.year}-${semester.semester}`}
                            >
                              {/* Course rows */}
                              {semester.courses.map((course, courseIndex) => (
                                <TableRow
                                  key={`${course.courseCode}-${course.slNo}`}
                                >
                                  {/* Semester column with rowspan */}
                                  {courseIndex === 0 && (
                                    <TableCell
                                      rowSpan={totalRows}
                                      className='border-r font-medium text-center align-top'
                                    >
                                      <div
                                      // className={
                                      //   semester.isWaived
                                      //     ? 'text-red-600'
                                      //     : ''
                                      // }
                                      >
                                        {semester.title}
                                        {/* {semester.isWaived && (
                                          <div className='text-xs text-red-600 mt-1 font-semibold'>
                                            WAIVED
                                          </div>
                                        )} */}
                                      </div>
                                    </TableCell>
                                  )}
                                  <TableCell className='border-r text-center font-medium'>
                                    {course.slNo}
                                  </TableCell>
                                  <TableCell className='border-r font-mono text-sm font-medium'>
                                    {course.courseCode}
                                  </TableCell>
                                  <TableCell className='border-r text-sm'>
                                    {course.courseTitle}
                                  </TableCell>
                                  <TableCell className='text-center font-medium'>
                                    {course.credit}
                                  </TableCell>
                                </TableRow>
                              ))}

                              {/* Semester total row */}
                              <TableRow
                                className={cn('font-semibold bg-secondary')}
                              >
                                {/* Empty cell for Sl. No. */}
                                <TableCell className='border-r'></TableCell>
                                {/* Empty cell for Course Code */}
                                <TableCell className='border-r'></TableCell>
                                {/* Total label in Course Title */}
                                <TableCell className='border-r text-right'>
                                  Total
                                </TableCell>
                                {/* Total value in Credit */}
                                <TableCell className='text-center font-bold'>
                                  {semester.total}
                                </TableCell>
                              </TableRow>
                            </React.Fragment>
                          );
                        })}

                        {/* Year total row */}
                        <TableRow className='bg-primary hover:bg-primary font-bold border-t-2'>
                          <TableCell className='border-r text-center text-white'>
                            {getYearOrdinal(Number.parseInt(year))} Year Total
                          </TableCell>

                          <TableCell
                            colSpan={3}
                            className='border-r text-right text-white'
                          >
                            Total
                          </TableCell>
                          <TableCell className='text-center text-white'>
                            {yearTotal}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              );
            })}
        </div>

        <div className='text-center pt-4'>
          <Badge variant='default' className='text-base px-4 py-2'>
            GRAND Total: {grandTotal} Credits
          </Badge>
        </div>
      </div>
    );
  }
);

CourseMapSection.displayName = 'CourseMapSection';
