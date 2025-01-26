import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = [
  {
    program_name: 'BSS (Hons) in Economics',
    total_credit: '141',
    total_cost: '1,91,000',
    admission_fee: '10,000',
    waiver_50: '1,40,000',
    waiver_60: '1,29,800',
    waiver_75: '1,14,500',
    waiver_100: '89,000',
  },
  {
    program_name: 'LLB (Hons) 4 Years',
    total_credit: '130',
    total_cost: '5,89,500',
    admission_fee: '10,000',
    waiver_50: '3,63,250',
    waiver_60: '3,18,000',
    waiver_75: '2,50,125',
    waiver_100: '1,37,000',
  },
];

const BA = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='py-3 border-r text-white'>
            Name of Programs
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            Total Credit
          </TableHead>
          <TableHead className='py-3 border-r text-white'>Total Cost</TableHead>
          <TableHead className='py-3 border-r text-white'>
            Admission Fee
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            50% Waiver
            <br />
            Below 8.00
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            60% Waiver
            <br />
            GPA 8.00 to below 9.00
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            75% Waiver
            <br />
            GPA 9.00 to below 10.00
          </TableHead>
          <TableHead className='py-3  text-white'>
            100% Waiver
            <br />
            GPA 5.00 + 5.00 = 10.00
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='border-r font-medium'>
              {row.program_name}
            </TableCell>
            <TableCell className='border-r'>{row.total_credit}</TableCell>
            <TableCell className='border-r'>{row.total_cost}</TableCell>
            <TableCell className='border-r'>{row.admission_fee}</TableCell>
            <TableCell className='border-r'>{row.waiver_50}</TableCell>
            <TableCell className='border-r'>{row.waiver_60}</TableCell>
            <TableCell className='border-r'>{row.waiver_75}</TableCell>
            <TableCell>{row.waiver_100}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BA;
