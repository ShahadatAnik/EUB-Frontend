import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ClassRoutine from '@/app/(programs)/_components/class-routine';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/regular-program/class-routine',
  title: 'Civil Engineering Class Routine | European University of Bangladesh',
  description:
    'View the official class routine for the B.Sc. in Civil Engineering program at EUB. Find schedules, course timings, and room numbers for the current semester.',
  keywords: [
    'Civil Engineering class routine',
    'EUB class schedule',
    'CE department timetable',
    'University class routine Dhaka',
    'Engineering course schedule',
    'Student class timetable',
    'Weekly class schedule EUB',
    'BSc in CE routine',
  ],
});

const Page = () => {
  return <ClassRoutine department='BSC-CIVIL' type='regular' />;
};

export default Page;
