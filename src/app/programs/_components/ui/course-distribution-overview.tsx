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

import { semesterData } from '../../_config/curriculum-data';

export const CourseDistributionOverview = React.memo(() => {
  const yearSummary = semesterData.reduce(
    (acc, semester) => {
      if (!acc[semester.year]) {
        acc[semester.year] = { semesters: 0, courses: 0, credits: 0 };
      }
      acc[semester.year].semesters += 1;
      acc[semester.year].courses += semester.courses.length;
      acc[semester.year].credits += semester.total;
      return acc;
    },
    {} as Record<
      number,
      { semesters: number; courses: number; credits: number }
    >
  );

  const getYearOrdinal = (year: number) => {
    switch (year) {
      case 1:
        return '1st Year';
      case 2:
        return '2nd Year';
      case 3:
        return '3rd Year';
      case 4:
        return '4th Year';
      default:
        return `${year}th Year`;
    }
  };

  return (
    <Card className='mb-6'>
      <CardHeader className='border-b bg-gray-50'>
        <CardTitle className='text-center text-lg'>Program Overview</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='overflow-hidden rounded-b-lg border'>
          <Table>
            <TableHeader>
              <TableRow className='bg-gray-100'>
                <TableHead className='border-r font-semibold'>
                  Academic Year
                </TableHead>
                <TableHead className='border-r text-center font-semibold'>
                  Semesters
                </TableHead>
                <TableHead className='border-r text-center font-semibold'>
                  Total Courses
                </TableHead>
                <TableHead className='text-center font-semibold'>
                  Total Credits
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(yearSummary)
                .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
                .map(([year, data], index) => (
                  <TableRow
                    key={year}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}
                  >
                    <TableCell className='border-r font-medium'>
                      {getYearOrdinal(Number.parseInt(year))}
                    </TableCell>
                    <TableCell className='border-r text-center'>
                      {data.semesters}
                    </TableCell>
                    <TableCell className='border-r text-center'>
                      {data.courses}
                    </TableCell>
                    <TableCell className='text-center font-semibold'>
                      {data.credits}
                    </TableCell>
                  </TableRow>
                ))}
              <TableRow className='border-t-2 border-blue-200 bg-blue-100'>
                <TableCell className='border-r font-bold text-blue-900'>
                  Program Total
                </TableCell>
                <TableCell className='border-r text-center font-bold text-blue-900'>
                  {Object.values(yearSummary).reduce(
                    (sum, data) => sum + data.semesters,
                    0
                  )}
                </TableCell>
                <TableCell className='border-r text-center font-bold text-blue-900'>
                  {Object.values(yearSummary).reduce(
                    (sum, data) => sum + data.courses,
                    0
                  )}
                </TableCell>
                <TableCell className='text-center font-bold text-blue-900'>
                  {Object.values(yearSummary).reduce(
                    (sum, data) => sum + data.credits,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
});

CourseDistributionOverview.displayName = 'CourseDistributionOverview';
