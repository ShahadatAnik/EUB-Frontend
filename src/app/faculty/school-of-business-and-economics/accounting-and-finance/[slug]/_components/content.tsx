'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { facultyTabs } from './faculty-tabs';

const Content = () => {
  const [activeTab, setActiveTab] = useState(facultyTabs[0].value);
  return (
    <div className='space-y-8'>
      <div className='grid lg:grid-cols-5 gap-10'>
        <div className='relative aspect-square w-full'>
          <Image fill src={'/person-placeholder.jpg'} alt='Faculty Picture' />
        </div>
        <div className='lg:col-span-4 '>
          <h4 className='text-2xl font-semibold'>Dr. Sarah Turner</h4>
          <p className='text-muted-foreground'>Assistant Professor</p>
          <ul className='mt-2 text-muted-foreground'>
            <li>PhD in Finance, University of Western Sydney, Australia</li>
            <li>
              MBS in Finance and Banking, University of Rajshahi, Bangladesh
            </li>
          </ul>

          <ul className='mt-4'>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Phone : </span>
                +880-2-55668200
              </p>
            </li>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Email : </span>
                mdarifur.rahman@northsouth.edu
              </p>
            </li>
            <li>
              <p className='flex items-center gap-1 text-muted-foreground'>
                <span className='font-semibold'>Office : </span>
                NAC 738
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
          <TabsList className='w-fit flex overflow-auto'>
            {facultyTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {facultyTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className='p-4'>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Content;
