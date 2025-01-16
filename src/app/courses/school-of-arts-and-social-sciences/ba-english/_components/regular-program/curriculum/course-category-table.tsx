import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const courseCategory = [
  {
    symbol: 'ACT',
    subject_name: 'Accounting',
  },
  {
    symbol: 'CHE',
    subject_name: 'Chemistry',
  },
  {
    symbol: 'CSE',
    subject_name: 'Computer Science and Engineering',
  },
  {
    symbol: 'ECO',
    subject_name: 'Economics',
  },
  {
    symbol: 'EEE',
    subject_name: 'Electrical and Electronics Engineering',
  },
  {
    symbol: 'ENG',
    subject_name: 'English',
  },
  {
    symbol: 'GED',
    subject_name: 'General Education',
  },
  {
    symbol: 'HSS',
    subject_name: 'Humanities and Social Sciences',
  },
  {
    symbol: 'IDE',
    subject_name: 'Interdisciplinary Engineering',
  },
  {
    symbol: 'MATH',
    subject_name: 'Mathematics',
  },
  {
    symbol: 'CE',
    subject_name: 'Civil Engineering',
  },
  {
    symbol: 'MGT',
    subject_name: 'Management',
  },
  {
    symbol: 'PHY',
    subject_name: 'Physics',
  },
  {
    symbol: 'IT',
    subject_name: 'Industrial Training',
  },
];

const CourseCategoryTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='text-white w-[200px] pl-4'>
            Letter Symbol
          </TableHead>
          <TableHead className='text-white'>Subject Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseCategory.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium pl-4'>{row.symbol}</TableCell>
            <TableCell>{row.subject_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CourseCategoryTable;
