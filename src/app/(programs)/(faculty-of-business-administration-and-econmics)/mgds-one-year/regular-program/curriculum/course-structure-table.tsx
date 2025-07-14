import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const courseStructure = [
  {
    category: 'Foundation Courses',
    no_of_theory_courses: '3',
    credit_per_course: '3',
    total_credit: '9',
  },

  {
    category: 'Core Course',
    no_of_theory_courses: '6',
    credit_per_course: '3',
    total_credit: '18',
  },
  {
    category: 'Specialized Course',
    no_of_theory_courses: '3',
    credit_per_course: '3',
    total_credit: '9',
  },
  {
    category: 'Research And Thesis',
    no_of_theory_courses: '1',
    credit_per_course: '3',
    total_credit: '3',
  },
];

const CourseStructureTable = () => {
  return (
    <Table>
      <TableCaption>Course Structure</TableCaption>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='text-white'>Course Category</TableHead>
          <TableHead className='text-white'>No. of Courses</TableHead>
          <TableHead className='text-white'>Credit Per Course</TableHead>
          <TableHead className='text-white'>Total Credit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseStructure.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{row.category}</TableCell>
            <TableCell className=''>{row.no_of_theory_courses}</TableCell>
            <TableCell className=''>{row.credit_per_course}</TableCell>
            <TableCell className=''>{row.total_credit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>12</TableCell>
          <TableCell></TableCell>
          <TableCell>39</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default CourseStructureTable;
