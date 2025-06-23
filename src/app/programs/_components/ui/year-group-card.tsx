import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Semester } from '../../_config/curriculum';

interface YearGroupCardProps {
  year: number;
  semesters: Semester[];
}

export const YearGroupCard = React.memo<YearGroupCardProps>(
  ({ year, semesters }) => {
    const yearTotal = semesters.reduce(
      (sum, semester) => sum + semester.total,
      0
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
      <Card className='shadow-md border-2'>
        <CardHeader className='bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b-2 border-blue-800'>
          <CardTitle className='text-xl font-bold text-center'>
            {getYearOrdinal(year)} Year ({yearTotal} Credits)
          </CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <div className='grid gap-0'>
            {semesters.map((semester, index) => (
              <div
                key={`${semester.year}-${semester.semester}`}
                className={index > 0 ? 'border-t-2' : ''}
              >
                {/* Semester Header */}
                <div className='bg-blue-50 border-b px-4 py-3'>
                  <h4 className='font-semibold text-blue-900 text-lg'>
                    {semester.title}
                  </h4>
                </div>

                {/* Semester Table */}
                <div className='overflow-hidden'>
                  <Table>
                    <TableHeader>
                      <TableRow className='bg-gray-100'>
                        <TableHead className='w-20 border-r font-semibold text-center text-gray-700'>
                          Sl. No.
                        </TableHead>
                        <TableHead className='w-36 border-r font-semibold text-gray-700'>
                          Course Code
                        </TableHead>
                        <TableHead className='border-r font-semibold text-gray-700'>
                          Course Title
                        </TableHead>
                        <TableHead className='w-20 font-semibold text-center text-gray-700'>
                          Credit
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {semester.courses.map((course, courseIndex) => (
                        <TableRow
                          key={`${course.courseCode}-${course.slNo}`}
                          className={
                            courseIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                          }
                        >
                          <TableCell className='border-r text-center font-medium text-gray-800'>
                            {course.slNo}
                          </TableCell>
                          <TableCell className='border-r font-mono text-sm font-semibold text-blue-700'>
                            {course.courseCode}
                          </TableCell>
                          <TableCell className='border-r text-sm text-gray-800'>
                            {course.courseTitle}
                          </TableCell>
                          <TableCell className='text-center font-semibold text-gray-800'>
                            {course.credit}
                          </TableCell>
                        </TableRow>
                      ))}
                      {/* Semester Total Row */}
                      <TableRow className='bg-blue-100 border-t-2 border-blue-200'>
                        <TableCell
                          colSpan={3}
                          className='border-r text-right font-bold text-blue-900'
                        >
                          Total
                        </TableCell>
                        <TableCell className='text-center font-bold text-blue-900'>
                          {semester.total}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
);

YearGroupCard.displayName = 'YearGroupCard';
