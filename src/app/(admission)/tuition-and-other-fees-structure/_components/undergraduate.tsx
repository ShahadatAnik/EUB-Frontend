import React from 'react';
import TuitionFeesTable from './tuition-fees-table';
import { courses, undergraduateFeesData, accordions } from '../_const/data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Undergraduate = () => {
  return (
    <div>
      <TuitionFeesTable data={undergraduateFeesData} />

      <div className='mt-8'>
        <p>Pharmacy (Bi-Semester) : Tk. 10,000.00</p>
        <br />
        <p>
          Each student has to pay Tk. 10,000.00 as Caution money (Refundable)
          during the time of admission.
        </p>
        <br />
        <p>Fees for other certificate courses:</p>

        <Table className='mt-2 border'>
          <TableHeader>
            <TableRow className='bg-primary hover:bg-primary'>
              <TableHead className='text-white border-r'>Sl No</TableHead>
              <TableHead className='text-white border-r'>
                Name of the Courses
              </TableHead>
              <TableHead className='text-white '>
                Fees Per Course (in BDT)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell className='border-r'>{index + 1}</TableCell>
                <TableCell className='border-r'>{course.name}</TableCell>
                <TableCell>{course.fees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <br />

        <strong>*Tuition waiver may be available as per NSU policy.</strong>

        <Accordion type='multiple' className='mt-2 w-full space-y-2'>
          {accordions.map((accordion, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className='bg-primary text-white px-6 py-3 text-lg'>
                {accordion.title}
              </AccordionTrigger>
              <AccordionContent className='px-4 py-3 text-base'>
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Undergraduate;
