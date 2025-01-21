'use client';

import { useState } from 'react';

import { faculties } from '../_const/data';
import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Content = () => {
  const [currentFaculty, setCurrentFaculty] = useState<string>(
    faculties[0].value
  );

  return (
    <div className='flex gap-16'>
      <div className='w-[400px] flex flex-col '>
        {faculties.map((faculty) => (
          <Button
            size={'lg'}
            variant={currentFaculty === faculty.value ? 'secondary' : 'outline'}
            className='h-16 text-xl border-t-0 border-x-0 rounded-none  shadow-none border-b justify-start'
            onClick={() => setCurrentFaculty(faculty?.value)}
            key={faculty.value}
          >
            {faculty.label}
          </Button>
        ))}
      </div>

      <Accordion type='single' collapsible className='w-full s'>
        {faculties
          .find((faculty) => faculty.value === currentFaculty)
          ?.clubs.map((club, index) => (
            <AccordionItem value={club.title} key={index}>
              <AccordionTrigger
                iconClassName='text-black size-6'
                className='px-4 py-3 bg-transparent border-b h-16 text-xl'
              >
                {club.title}
              </AccordionTrigger>
              <AccordionContent className='p-8'>
                {club.content}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default Content;
