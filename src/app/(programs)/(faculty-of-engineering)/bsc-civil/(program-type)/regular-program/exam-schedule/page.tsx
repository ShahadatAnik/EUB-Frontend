import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/regular-program/exam-schedule',
  title: 'Civil Engineering (Regular) Exam Schedule | Summer 2025 | EUB',
  description:
    'Get the latest exam schedule for the B.Sc. in Civil Engineering regular program at EUB. Find dates for your mid-term and final examinations.',
  keywords: [
    'Exam schedule Summer 2025',
    'EUB final exam routine',
    'Civil Engineering exam schedule',
    'CE regular program exam dates',
    'Mid-term exam routine EUB',
    'Final exam timetable',
    'University exam dates Dhaka',
    'Student exam timetable',
  ],
});

const Page = () => {
  return <ExamSchedule department={Program['BSC-CIVIL']} type='regular' />;
};

export default Page;
