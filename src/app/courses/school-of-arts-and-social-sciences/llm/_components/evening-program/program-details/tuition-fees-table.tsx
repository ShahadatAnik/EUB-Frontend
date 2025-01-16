import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const tuitionFees = [
  {
    title: 'Tuition Fee per credit',
    amount: '6500',
  },
  {
    title: 'Student Activity Fee per Semester',
    amount: '4500',
  },
  {
    title: 'Computer Lab Fee per Semester',
    amount: '3750',
  },
  {
    title: 'Library Fee per Semester',
    amount: '2250',
  },
];

const TuitionFeesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cost / Fee Structure</TableHead>
          <TableHead>Amount (in Taka)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tuitionFees.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{row.title}</TableCell>
            <TableCell>{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TuitionFeesTable;
