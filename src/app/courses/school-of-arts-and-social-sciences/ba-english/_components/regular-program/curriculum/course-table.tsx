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

const CourseTable: React.FC<{
  data: { code: string; title: string; credit: string }[];
  title: string;
}> = ({ data, title }) => {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='text-white w-[200px] pl-4'>
            Course Code
          </TableHead>
          <TableHead className='text-white'>Course Title</TableHead>
          <TableHead className='text-white w-[100px]'>Credit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium pl-4'>{row.code}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.credit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CourseTable;
