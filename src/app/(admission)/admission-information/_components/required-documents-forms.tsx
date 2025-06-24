import React from 'react';

import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import SectionLayout from './section-layout';

const pdfs = [
  {
    updatedAt: '2022-01-01',
    pdf: '/pdf/test.pdf',
    title: 'Document',
  },
];

const RequiredDocumentsForms = () => {
  return (
    <SectionLayout
      title='Required Documents and Forms'
      id='required-documents-and-forms'
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Update Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pdfs.map((pdf, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>
                <Link
                  className='text-primary underline'
                  target='_blank'
                  href={pdf.pdf}
                >
                  {pdf.title}
                </Link>
              </TableCell>
              <TableCell>{pdf.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionLayout>
  );
};

export default RequiredDocumentsForms;
