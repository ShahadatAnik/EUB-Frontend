import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/evening-program/exam-schedule',
  title: 'Civil Engineering (Evening) Exam Schedule | EUB',
  description:
    'Get the latest exam schedule for the B.Sc. in Civil Engineering (Evening) program. Find dates and times for mid-term and final examinations.',
  keywords: [
    'Evening program exam schedule',
    'CE final exam routine evening',
    'Mid-term exam dates for evening batch',
    'EUB exam timetable evening',
    'Exam schedule for professionals',
    'University exam dates evening',
    'Part-time degree exam schedule',
    'Final exam routine',
  ],
});

const Page = () => {
  return <ExamSchedule department={Program['BSC-CIVIL']} type='evening' />;
};

export default Page;
