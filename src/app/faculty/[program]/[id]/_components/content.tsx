'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IFacultyDetails } from '@/types';
import { facultyTabs } from './faculty-tabs';
import RichTextViewer from '@/components/rich-text-viewer';

const Content = ({ faculty }: { faculty: IFacultyDetails }) => {
  const [activeTab, setActiveTab] = useState(facultyTabs[0].value);
  return (
    <div className='space-y-8'>
      <div className='grid lg:grid-cols-5 gap-10'>
        <div className='relative aspect-square w-full'>
          <Image
            className='object-cover'
            src={
              faculty.teacher_image
                ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + faculty.teacher_image
                : '/person-placeholder.jpg'
            }
            alt={'teacher_image'}
            fill
          />
        </div>
        <div className='lg:col-span-4 '>
          <h4 className='text-2xl font-semibold'>{faculty.teacher_name}</h4>
          <p className='text-muted-foreground'>{faculty.teacher_designation}</p>
          <div className='mt-2 !text-muted-foreground'>
            <RichTextViewer content={faculty.education} />
          </div>

          <ul className='mt-4'>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Phone : </span>
                {faculty.teacher_phone}
              </p>
            </li>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Email : </span>
                {faculty.teacher_email}
              </p>
            </li>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Office : </span>
                {faculty.office}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          defaultValue={activeTab}
          className='w-full '
        >
          <TabsList className='size-fit  flex justify-start gap-2 flex-wrap'>
            {facultyTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {facultyTabs.map((tab) => {
            return (
              <TabsContent key={tab.value} value={tab.value} className='p-4'>
                {(faculty as any)[tab.value] ? (
                  <RichTextViewer content={(faculty as any)[tab.value]} />
                ) : (
                  'No data'
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Content;
