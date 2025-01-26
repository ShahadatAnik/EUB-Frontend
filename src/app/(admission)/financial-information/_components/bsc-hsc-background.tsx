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
    program_name: 'BSc in Civil Engineering',
    total_credit: '165',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
  {
    program_name: 'BSc in EEE',
    total_credit: '160',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
  {
    program_name: 'BSc in ME',
    total_credit: '160',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
  {
    program_name: 'BSc in Textile',
    total_credit: '160',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
  {
    program_name: 'BSc in IPE',
    total_credit: '160',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
  {
    program_name: 'BSc in CSE **',
    total_credit: '160',
    total_cost: '4,40,000',
    admission_fee: '10,000',
    waiver_60: '2,59,400',
    waiver_70: '2,29,300',
    waiver_80: '1,99,200',
    waiver_100: '1,39,000',
  },
];

const BscHscBackground = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='py-3 border-r text-white'>
            Name of Programs
            <br />
            (HSC Background)
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

export default BscHscBackground;
