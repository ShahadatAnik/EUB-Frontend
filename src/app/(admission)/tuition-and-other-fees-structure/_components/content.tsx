'use client';

import { ICertificateFee, ITuitionFee } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import TuitionFeesTable from './tuition-fees-table';
import Undergraduate from './undergraduate';

interface Props {
  initialData: {
    undergraduateTuitionFees: ITuitionFee[];
    graduateTuitionFees: ITuitionFee[];
    certificateTuitionFees: ICertificateFee[];
  };
}

const Content: React.FC<Props> = ({ initialData }) => {
  return (
    <div className='space-y-12'>
      <Tabs defaultValue='undergraduate' className='w-full'>
        <TabsList className='mx-auto grid w-full grid-cols-2 bg-gray-200 lg:w-[400px]'>
          <TabsTrigger value='undergraduate'>Undergraduate</TabsTrigger>
          <TabsTrigger value='graduate'>Graduate</TabsTrigger>
        </TabsList>
        <TabsContent className='mt-8' value='undergraduate'>
          <Undergraduate
            undergraduateFeesData={initialData.undergraduateTuitionFees}
            certificateFeesData={initialData.certificateTuitionFees}
          />
        </TabsContent>
        <TabsContent className='mt-8' value='graduate'>
          <TuitionFeesTable isGraduate data={initialData.graduateTuitionFees} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;
