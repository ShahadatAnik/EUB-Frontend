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
              className='px-6 py-3 bg-accent border-b text-lg'
            >
              {index + 1 + '. '}
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='py-4 px-8 text-base'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Content;
