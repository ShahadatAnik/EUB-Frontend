'use client';

import data from '../_const/faq-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Content = () => {
  return (
    <div>
      <Accordion type='multiple' className='w-full'>
        {data.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger
              iconClassName='text-primary'
              className='px-4 lg:px-6 py-2 lg:py-3 bg-accent border-b text-base lg:text-lg'
            >
              {index + 1 + '. '}
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='py-3 lg:py-4 pl-2 lg:px-8 text-base lg:text-base'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Content;
