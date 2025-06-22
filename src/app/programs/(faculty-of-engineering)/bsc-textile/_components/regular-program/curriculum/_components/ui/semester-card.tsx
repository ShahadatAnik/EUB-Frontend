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
import type { Semester } from '../../_config/types';

interface SemesterCardProps {
  semester: Semester;
}

export const SemesterCard = React.memo<SemesterCardProps>(({ semester }) => {
  return (
    <Card className='shadow-sm'>
      <CardHeader className='bg-blue-50 border-b'>
        <CardTitle className='text-lg font-semibold text-blue-900'>
          {semester.title}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='border rounded-b-lg overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow className='bg-gray-50'>
                <TableHead className='w-20 border-r font-semibold text-center'>
                  Sl. No.
                </TableHead>
                <TableHead className='w-36 border-r font-semibold'>
                  Course Code
                </TableHead>
                <TableHead className='border-r font-semibold'>
                  Course Title
                </TableHead>
                <TableHead className='w-20 font-semibold text-center'>
                  Credit
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {semester.courses.map((course, index) => (
                <TableRow
                  key={`${course.courseCode}-${course.slNo}`}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}
                >
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
              <TableRow className='bg-blue-100 font-bold border-t-2 border-blue-200'>
                <TableCell
                  colSpan={3}
                  className='border-r text-right text-blue-900'
                >
                  Total
                </TableCell>
                <TableCell className='text-center text-blue-900'>
                  {semester.total}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
});

SemesterCard.displayName = 'SemesterCard';
