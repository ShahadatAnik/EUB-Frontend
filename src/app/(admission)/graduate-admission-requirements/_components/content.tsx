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
              <AccordionTrigger className=' px-4 py-3 bg-primary text-white text-lg  '>
                {item.header}
              </AccordionTrigger>
              <AccordionContent className='py-4 px-8 text-base'>
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
