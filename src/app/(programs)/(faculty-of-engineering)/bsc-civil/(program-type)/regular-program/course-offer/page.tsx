import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import CourseOffer from '@/app/(programs)/_components/course-offer';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/regular-program/course-offer',
  title: 'Offered Courses | Summer 2025 | Civil Engineering | EUB',
  description:
    'View the offered courses for the Summer 2025 semester for the Civil Engineering department at EUB. Plan your registration and academic schedule accordingly.',
  keywords: [
    'Course offer Summer 2025',
    'EUB offered courses 2025',
    'Civil Engineering course registration',
    'CE available courses',
    'University subject list',
    'Student course enrollment',
    'Academic offerings EUB',
    'Current semester courses',
  ],
});

const Page = () => {
  return <CourseOffer department={Program['BSC-CIVIL']} type='regular' />;
};

export default Page;
