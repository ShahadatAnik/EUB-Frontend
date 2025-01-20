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
    program_name: 'MBA (2 Years)',
    total_credit: '63',
    total_cost: '1,96,500',
    admission_fee: '10,000',
    waiver_50: '1,27,000',
    waiver_100: '57,500',
  },
  {
    program_name: 'MBA (BBA Graduate)',
    total_credit: '336',
    total_cost: '1,22,000',
    admission_fee: '10,000',
    waiver_50: '76,500',
    waiver_100: '31,000',
  },
  {
    program_name: 'EMBA',
    total_credit: '48',
    total_cost: '1,60,000',
    admission_fee: '10,000',
    waiver_50: '1,02,250',
    waiver_100: '44,500',
  },
  {
    program_name: 'MSS in Economics (1 Year)',
    total_credit: '36',
    total_cost: '1,03,292',
    admission_fee: '10,000',
    waiver_50: '66,896',
    waiver_100: '30,500',
  },
  {
    program_name: 'MSS in Economics (2 Year)',
    total_credit: '69',
    total_cost: '1,63,525',
    admission_fee: '10,000',
    waiver_50: '1,15,000',
    waiver_100: '66,500',
  },
  {
    program_name: 'MGDS',
    total_credit: '39',
    total_cost: '93,500',
    admission_fee: '10,000',
    waiver_50: '67,000',
    waiver_100: '40,500',
  },
  {
    program_name: 'MA in English (1 Year)',
    total_credit: '36',
    total_cost: '65,100',
    admission_fee: '10,000',
    waiver_50: '43,100',
    waiver_100: '21,100',
  },
  {
    program_name: 'MA in English (2 Years)',
    total_credit: '72',
    total_cost: '1,24,300',
    admission_fee: '10,000',
    waiver_50: '81,000',
    waiver_100: '37,700',
  },
  {
    program_name: 'LLM (1 Year)',
    total_credit: '36',
    total_cost: '84,100',
    admission_fee: '10,000',
    waiver_50: '52,100',
    waiver_100: '20,100',
  },
];

const Others = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead rowSpan={2} className=' py-3 border-r text-white'>
            Name of Programs
          </TableHead>
          <TableHead rowSpan={2} className='py-3 border-r text-white'>
            Total Credit
          </TableHead>
          <TableHead rowSpan={2} className='py-3 border-r text-white'>
            Total Cost
          </TableHead>
          <TableHead rowSpan={2} className='py-3 border-r text-white'>
            Admission Fee
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            No Condition
          </TableHead>
          <TableHead className='py-3 border-r text-white'>
            Son/ Daughter of FF
            <br />
            or Siblings
          </TableHead>
        </TableRow>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='py-3 border-r text-white'>50% Waiver</TableHead>
          <TableHead className='py-3 border-r text-white'>
            100% Waiver
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
            <TableCell>{row.waiver_100}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Others;
