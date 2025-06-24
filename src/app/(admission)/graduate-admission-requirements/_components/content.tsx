import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import data from '../_const/admission-requirements-data';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container'>
        <Accordion type='single' collapsible className='w-full space-y-2'>
          {data.map((item, index) => (
            <AccordionItem key={index} value={`Requirement ${index + 1}`}>
              <AccordionTrigger className='bg-primary px-4 py-3 text-lg text-white'>
                {item.header}
              </AccordionTrigger>
              <AccordionContent className='px-8 py-4 text-base'>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Content;
