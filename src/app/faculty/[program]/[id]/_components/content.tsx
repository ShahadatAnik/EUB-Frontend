'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { IFacultyDetails } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { facultyTabs } from './faculty-tabs';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const Content = ({ faculty }: { faculty: IFacultyDetails }) => {
  const [activeTab, setActiveTab] = useState(facultyTabs[0].value);
  return (
    <div className='space-y-8'>
      <div className='grid gap-4 lg:grid-cols-5 lg:gap-6'>
        <Image
          width={300}
          height={300}
          className='aspect-square w-full object-cover object-top'
          src={
            faculty.teacher_image
              ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + faculty.teacher_image
              : '/person-placeholder.jpg'
          }
          alt={'teacher_image'}
        />
        <div className='lg:col-span-4'>
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
          className='w-full'
        >
          <TabsList className='flex size-fit flex-wrap justify-start gap-2'>
            {facultyTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {facultyTabs.map((tab) => {
            const facultyContent: Record<string, unknown> = faculty;
            const content = facultyContent[tab.value];
            return (
              <TabsContent key={tab.value} value={tab.value} className='p-4'>
                {typeof content === 'string' && content.trim() !== '' ? (
                  <RichTextViewer content={content} />
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
