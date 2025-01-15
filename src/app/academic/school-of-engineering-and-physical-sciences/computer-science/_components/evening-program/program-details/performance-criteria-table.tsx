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

const performanceCriteriaData = [
  {
    criteriaName: 'Class attendance & Participation',
    marks: '10',
  },
  {
    criteriaName: 'Continuous Assessment',
    marks: '30',
  },
  {
    criteriaName: 'Mid-term Examination',
    marks: '30',
  },
  {
    criteriaName: 'Final Examination',
    marks: '30',
  },
];

const PerformanceCriteriaTable = () => {
  return (
    <Table>
      <TableCaption>Performance Evaluation of Courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Evaluation Criteria</TableHead>
          <TableHead>Marks/Weight</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {performanceCriteriaData.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{row.criteriaName}</TableCell>
            <TableCell>{row.marks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default PerformanceCriteriaTable;
