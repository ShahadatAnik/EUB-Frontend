'use client';

import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const pdfs = [
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Test PDF',
  },
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Test PDF',
  },
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Test PDF',
  },
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Test PDF',
  },
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Test PDF',
  },
];

const Content = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h6 className='text-2xl font-semibold text-primary py-2 px-6 border-l-4 bg-accent border-primary'>
          NSBR
        </h6>
        <div className='pl-4 mt-4 text-base   flex flex-col space-y-2'>
          <Link href={'#'} className='underline text-primary'>
            NSBR Copy Right Agreement
          </Link>
          <Link href={'#'} className='underline text-primary'>
            NSBR Administration, Policy, and Guideline
          </Link>
          <Link href={'#'} className='underline text-primary'>
            NSBR Publication Ethics and Malpractices Statement for NSBR
          </Link>
        </div>
      </div>
      <Table className='border '>
        <TableHeader>
          <TableRow className='bg-primary hover:bg-primary'>
            <TableHead className='border-r text-white pl-4'>
              Description
            </TableHead>
            <TableHead className='border-r text-white pl-4'>
              Update Date
            </TableHead>
            <TableHead className='text-white pl-4 text-center w-[140px]'>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pdfs.map((pdf, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium border-r'>
                <Link
                  className='underline text-primary'
                  target='_blank'
                  href={pdf.pdf}
                >
                  {pdf.title}
                </Link>
              </TableCell>
              <TableCell className='border-r'>{pdf.updatedAt}</TableCell>
              <TableCell>
                <Link href={pdf.pdf}>
                  <Button className='w-full' size={'sm'}>
                    Download
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Content;
