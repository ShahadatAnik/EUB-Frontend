import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ClassRoutine from '@/app/(programs)/_components/class-routine';
export const metadata = generateMetaData({
    pageUrl: 'https://eub.edu.bd/bba/regular-program/class-routine',
    title: 'Bachelor of Business Administration(BBA) Class Routine | European University of Bangladesh',
    description:
      'View the official class routine for the B.Sc. in Bachelor of Business Administration(BBA) program at EUB. Find schedules, course timings, and room numbers for the current semester.',
    keywords: [
      'Bachelor of Business Administration(BBA) class routine',
      'EUB class schedule',
      'BBA department timetable',
      'University class routine Dhaka',
      'Engineering course schedule',
      'Student class timetable',
      'Weekly class schedule EUB',
      'BSc in BBA routine',
    ],
  });
  const Page = () => {
    return <ClassRoutine department='BBA' type='regular' />;
  };

export default Page;
