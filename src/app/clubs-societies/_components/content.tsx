'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IClubAndSociety } from '@/types';

const Content: React.FC<{ data: IClubAndSociety[] }> = ({ data }) => {
  const [currentFaculty, setCurrentFaculty] = useState<string>(data[0].value);

  const content =
    data.find((faculty) => faculty.value === currentFaculty)?.content || '';

  const clubs =
    data.find((faculty) => faculty.value === currentFaculty)?.clubs || [];

  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
      <div className='w-full lg:w-[400px] flex flex-col '>
        {data.map((faculty) => (
          <Button
            size={'lg'}
            variant={currentFaculty === faculty.value ? 'secondary' : 'outline'}
            className='h-12 lg:h-16 text-base lg:text-xl border-t-0 border-x-0 rounded-none  shadow-none border-b justify-start'
            onClick={() => setCurrentFaculty(faculty?.value)}
            key={faculty.value}
          >
            {faculty.label}
          </Button>
        ))}
      </div>

      {content && <div className='w-full'>{content}</div>}

      {clubs.length > 0 && (
        <Accordion type='single' collapsible className='w-full'>
          {clubs.map((club, index) => (
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
      )}
    </div>
  );
};

export default Content;
