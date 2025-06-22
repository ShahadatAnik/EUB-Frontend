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
import type { Semester } from '../../_const/curriculum';

interface CourseMapSectionProps {
  semesterData: Semester[];
  backgroundStudents?: string;
}

export const CourseMapSection = React.memo<CourseMapSectionProps>(
  ({ semesterData, backgroundStudents }) => {
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

                  <div className='border rounded-lg overflow-hidden'>
                    <Table>
                      <TableHeader>
                        <TableRow className='bg-primary hover:bg-primary'>
                          <TableHead className='w-32 text-white border-r font-semibold'>
                            Semester
                          </TableHead>
                          <TableHead className='w-20 text-white border-r font-semibold text-center'>
                            Sl. No.
                          </TableHead>
                          <TableHead className='w-36 text-white border-r font-semibold'>
                            Course Code
                          </TableHead>
                          <TableHead className='text-white border-r font-semibold'>
                            Course Title
                          </TableHead>
                          <TableHead className='w-20 text-white font-semibold text-center'>
                            Credit
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {semesters.map((semester) => (
                          <React.Fragment
                            key={`${semester.year}-${semester.semester}`}
                          >
                            {semester.courses.map((course, courseIndex) => (
                              <TableRow
                                key={`${course.courseCode}-${course.slNo}`}
                              >
                                {courseIndex === 0 && (
                                  <TableCell
                                    rowSpan={semester.courses.length + 1}
                                    className='border-r font-medium text-center border-b'
                                  >
                                    {semester.title}
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
                            {/* Semester Total Row */}
                            <TableRow className={'bg-gray-100 font-semibold'}>
                              <TableCell
                                colSpan={3}
                                className='border-r text-right'
                              >
                                Total
                              </TableCell>
                              <TableCell className='text-center'>
                                {semester.total}
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        ))}
                        {/* Year Total Row */}
                        <TableRow className='bg-gray-200 font-bold border-t-2'>
                          <TableCell className='border-r text-center'>
                            {getYearOrdinal(Number.parseInt(year))} Year Total
                          </TableCell>
                          <TableCell
                            colSpan={3}
                            className='border-r text-right'
                          >
                            Total
                          </TableCell>
                          <TableCell className='text-center'>
                            {yearTotal}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              );
            })}

          <div className='text-center pt-4'>
            <Badge variant='default' className='text-base px-4 py-2 '>
              Grand Total: {grandTotal} Credits
            </Badge>
          </div>
        </div>
      </div>
    );
  }
);

CourseMapSection.displayName = 'CourseMapSection';
