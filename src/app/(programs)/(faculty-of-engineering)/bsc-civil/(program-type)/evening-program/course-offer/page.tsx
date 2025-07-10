import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import CourseOffer from '@/app/(programs)/_components/course-offer';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/evening-program/course-offer',
  title: 'Offered Courses | Summer 2025 | CE (Evening) | EUB',
  description:
    'View the list of offered courses for the Summer 2025 semester for the B.Sc. in Civil Engineering (Evening) program. See available subjects for registration.',
  keywords: [
    'Evening course offer Summer 2025',
    'Available evening classes EUB',
    'Part-time course registration',
    'CE evening course list',
    'EUB offered courses evening',
    'Summer 2025 evening courses',
    'Subjects for evening students',
    'University registration evening program',
  ],
});

const Page = () => {
  return <CourseOffer department={Program['BSC-CIVIL']} type='evening' />;
};

export default Page;
