import React from 'react';

import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import ExamSchedule from '@/app/(programs)/_components/exam-schedule';


const Page = () => {
  return <ExamSchedule department='EMBA' type='regular' />;
};


export default Page;
