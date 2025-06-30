import React from 'react';

import { Program } from '@/types/enum';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

const Page = () => {
  return <ExamSchedule department={Program['MSS-ECONOMICS']} type='regular' />;
};

export default Page;
