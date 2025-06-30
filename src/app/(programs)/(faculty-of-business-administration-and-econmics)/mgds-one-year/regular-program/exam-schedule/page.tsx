import React from 'react';

import { Program } from '@/types/enum';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

const Page = () => {
  return <ExamSchedule department={Program['MGDS-ONE-YEAR']} type='regular' />;
};

export default Page;
