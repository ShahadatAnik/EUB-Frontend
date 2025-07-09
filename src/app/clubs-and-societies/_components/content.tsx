'use client';

import { useState } from 'react';

import { IClubAndSociety } from '@/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const Content: React.FC<{ data: IClubAndSociety[] }> = ({ data }) => {
  const [currentFaculty, setCurrentFaculty] = useState<string>(data[0].value);

  const content =
    data.find((faculty) => faculty.value === currentFaculty)?.content || '';

  const clubs =
    data.find((faculty) => faculty.value === currentFaculty)?.clubs || [];

  return (
    <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
      <div className='flex w-full flex-col lg:w-[400px]'>
        {data.map((faculty) => (
          <Button
            size={'lg'}
            variant={currentFaculty === faculty.value ? 'secondary' : 'outline'}
            className='h-12 justify-start rounded-none border-x-0 border-b border-t-0 text-base shadow-none lg:h-16 lg:text-xl'
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
                className='h-16 border-b bg-transparent px-4 py-3 text-xl'
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
