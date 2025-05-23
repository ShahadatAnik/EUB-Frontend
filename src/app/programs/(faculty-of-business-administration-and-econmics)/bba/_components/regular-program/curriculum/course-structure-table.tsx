import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';

interface ICourseStructure {
  course_category: string;
  number_of_courses: number;
  credit_per_course: number | string;
  total_credits: number;
}

const data: ICourseStructure[] = [
  {
    course_category: 'General Education (GE)',
    number_of_courses: 10,
    credit_per_course: 3,
    total_credits: 30,
  },
  {
    course_category: 'Core',
    number_of_courses: 27,
    credit_per_course: '3/1',
    total_credits: 79,
  },
  {
    course_category: 'Major',
    number_of_courses: 5,
    credit_per_course: 3,
    total_credits: 15,
  },
  {
    course_category: 'Minor',
    number_of_courses: 3,
    credit_per_course: 3,
    total_credits: 9,
  },
  {
    course_category: 'Internship',
    number_of_courses: 1,
    credit_per_course: 3,
    total_credits: 3,
  },
];

const columns: SystemTableColumn<ICourseStructure>[] = [
  {
    accessorKey: 'course_category',
    header: 'Course Category',
  },
  {
    accessorKey: 'number_of_courses',
    header: 'Number of Courses',
  },
  {
    accessorKey: 'credit_per_course',
    header: 'Credit Per Course',
  },
  {
    accessorKey: 'total_credits',
    header: 'Total Credits',
  },
];

const CourseStructureTable = () => {
  return (
    <SystemTable caption='Course Structure' data={data} columns={columns}>
      <TableFooter>
        <TableRow>
          <TableCell className='border-r'>Total</TableCell>
          <TableCell className='border-r'>
            {data.reduce((acc, curr) => acc + curr.number_of_courses, 0)}
          </TableCell>
          <TableCell className='border-r'>3/1</TableCell>
          <TableCell>
            {data.reduce((acc, curr) => acc + curr.total_credits, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </SystemTable>
  );
};

export default CourseStructureTable;
