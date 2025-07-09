import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import ClassRoutine from '@/app/(programs)/_components/class-routine';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/evening-program/class-routine',
  title: 'Civil Engineering (Evening) Class Routine | EUB',
  description:
    'Find the official class routine and schedule for the B.Sc. in Civil Engineering (Evening) program at EUB. Plan your weekly schedule with course timings.',
  keywords: [
    'Evening class routine EUB',
    'Part-time engineering schedule',
    'EUB evening class timetable',
    'CE evening batch routine',
    'Class schedule for working students',
    'Weekly evening classes',
    'University timetable evening',
    'Professional course routine',
  ],
});

const Page = () => {
  return <ClassRoutine department={Program['BSC-CIVIL']} type='evening' />;
};

export default Page;
