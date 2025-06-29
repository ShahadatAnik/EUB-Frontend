'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

import { IFacultyDetails } from '@/types';

import NoDataFound from '@/components/no-data-found';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { facultyTabs } from '../_config/faculty-tabs-data';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

export function FacultyTabs({ faculty }: { faculty: IFacultyDetails }) {
  const [activeTab, setActiveTab] = useState(facultyTabs[0].value);
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      defaultValue={activeTab}
      className='w-full'
    >
      <TabsList className='mb-4 flex size-fit w-full flex-wrap justify-start gap-2 bg-secondary'>
        {facultyTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className='data-[state=active]:bg-white'
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {facultyTabs.map((tab) => {
        const facultyContent: Record<string, unknown> = faculty;
        const content = facultyContent[tab.value];

        return (
          <TabsContent key={tab.value} value={tab.value}>
            <Card className='border-gray-200 bg-white'>
              <CardHeader>
                <CardTitle className='text-primary'>{tab.label}</CardTitle>
              </CardHeader>
              <CardContent className='prose max-w-none pt-0'>
                {typeof content === 'string' && content.trim() !== '' ? (
                  <RichTextViewer content={content} />
                ) : (
                  <NoDataFound
                    message={`${tab.label} information will be updated soon.`}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
