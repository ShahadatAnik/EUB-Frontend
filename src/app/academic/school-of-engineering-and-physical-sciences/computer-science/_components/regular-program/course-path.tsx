import React from 'react';
import ContentWrapper from '../content-wrapper';

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

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const CoursePath = () => {
  return (
    <ContentWrapper title='Course Map and Path'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className=''>
          <TableRow className='border-t bg-primary hover:bg-primary'>
            <TableHead
              className=' border-l border-r pl-2 text-white'
              rowSpan={2}
            >
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
            <TableHead className='border-r pl-2 text-white'>
              Sessional
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ContentWrapper>
  );
};

export default CoursePath;
