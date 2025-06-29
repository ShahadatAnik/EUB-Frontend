import React from 'react';

import { ISemesterCourse } from '@/types';

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

const SemesterCourseTable: React.FC<{
  data: ISemesterCourse[];
  title: string;
}> = ({ title, data }) => {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader className=''>
        <TableRow className='border-t bg-primary hover:bg-primary'>
          <TableHead className='border-l border-r pl-2 text-white' rowSpan={2}>
            No.
          </TableHead>
          <TableHead className='border-r pl-2 text-white' rowSpan={2}>
            Course Name
          </TableHead>
          <TableHead className='border-r pl-2 text-white' colSpan={2}>
            Contact Hours/Week
          </TableHead>
          <TableHead className='border-r pl-2 text-white' rowSpan={2}>
            Credit
          </TableHead>
          <TableHead className='border-r pl-2 text-white' rowSpan={2}>
            Pre-requisite
          </TableHead>
        </TableRow>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='border-r pl-2 text-white'>Theory</TableHead>
          <TableHead className='border-r pl-2 text-white'>Sessional</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell className='border-r'>{data.code}</TableCell>
            <TableCell className='border-r'>{data.course_name}</TableCell>
            <TableCell className='border-r'>
              {data.contact_hours_theory}
            </TableCell>
            <TableCell className='border-r'>
              {data.contact_hours_sessional}
            </TableCell>
            <TableCell className='border-r'>{data.credit}</TableCell>
            <TableCell>{data.prerequisite}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Credit</TableCell>
          <TableCell>
            {data.reduce((total, item) => total + Number(item.credit), 0)}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default SemesterCourseTable;
