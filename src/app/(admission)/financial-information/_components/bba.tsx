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
    program_name: 'BBA (4 Years)',
    total_credit: '136',
    total_cost: '4,48,500',
    admission_fee: '10,000',
    waiver_60: '2,47,200',
    waiver_70: '2,13,650',
    waiver_80: '1,80,100',
    waiver_100: '1,13,000',
  },
  {
    program_name: 'BTHM',
    total_credit: '132',
    total_cost: '2,98,500',
    admission_fee: '10,000',
    waiver_60: '1,75,200',
    waiver_70: '1,54,650',
    waiver_80: '1,34,100',
    waiver_100: '93,000',
  },
  {
    program_name: `BA (Hon's) in English`,
    total_credit: '132',
    total_cost: '3,18,400',
    admission_fee: '10,000',
    waiver_60: '1,71,400',
    waiver_70: '1,46,900',
    waiver_80: '1,22,400',
    waiver_100: '73,400',
  },
];

const BBA = () => {
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
            60% Waiver
            <br />
            Below 8.00
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            70% Waiver
            <br />
            GPA 8.00 to below 9.00
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            80% Waiver
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
            <TableCell className='border-r'>{row.waiver_60}</TableCell>
            <TableCell className='border-r'>{row.waiver_70}</TableCell>
            <TableCell className='border-r'>{row.waiver_80}</TableCell>
            <TableCell>{row.waiver_100}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BBA;
