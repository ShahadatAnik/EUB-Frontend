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
    course_category: 'General Education (GED)',
    number_of_courses: 8,
    credit_per_course: 3,
    total_credits: 24,
  },
  {
    course_category: 'Core Course',
    number_of_courses: 8,
    credit_per_course: 3,
    total_credits: 24,
  },
  {
    course_category: 'Minor Course',
    number_of_courses: 19,
    credit_per_course: 3,
    total_credits: 57,
  },
  {
    course_category: 'Major Course',
    number_of_courses: 6,
    credit_per_course: 3,
    total_credits: 18,
  },
  {
    course_category: 'Practicum',
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
          <TableCell className='border-r'>3</TableCell>
          <TableCell>
            {data.reduce((acc, curr) => acc + curr.total_credits, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </SystemTable>
  );
};

export default CourseStructureTable;
