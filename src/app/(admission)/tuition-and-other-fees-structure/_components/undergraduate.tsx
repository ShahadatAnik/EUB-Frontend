import React from 'react';
import TuitionFeesTable from './tuition-fees-table';
import { accordions } from '../_const/data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { ICertificateFee, ITuitionFee } from '@/types';

import CertificateFeesTable from './certificate-fees-table';

const Undergraduate: React.FC<{
  undergraduateFeesData: ITuitionFee[];
  certificateFeesData: ICertificateFee[];
}> = ({ undergraduateFeesData, certificateFeesData }) => {
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

        <section id='other-certificate-courses'>
          <h4 className='text-lg font-medium mb-1'>
            Fees for other certificate courses:
          </h4>
          <CertificateFeesTable data={certificateFeesData} />
        </section>

        <br />

        <strong>*Tuition waiver may be available as per EUB policy.</strong>

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
