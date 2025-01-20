'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Undergraduate from './undergraduate';
import Graduate from './graduate';

const Content = () => {
  return (
    <div className='space-y-12'>
      <Tabs defaultValue='undergraduate' className='w-full '>
        <TabsList className='grid  grid-cols-2 bg-gray-200 w-[400px] mx-auto'>
          <TabsTrigger value='undergraduate'>Undergraduate</TabsTrigger>
          <TabsTrigger value='graduate'>Graduate</TabsTrigger>
        </TabsList>
        <TabsContent className='mt-8' value='undergraduate'>
          <Undergraduate />
        </TabsContent>
        <TabsContent className='mt-8' value='graduate'>
          <Graduate />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;
