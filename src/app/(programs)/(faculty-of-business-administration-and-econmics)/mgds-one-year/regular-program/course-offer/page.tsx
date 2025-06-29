import React from 'react';

import CourseOffer from '@/app/(programs)/_components/course-offer';

// export const metadata = generateMetaData({
//   pageUrl: 'https://eub.edu.bd/bba/regular-program/course-offer',
//   title: 'Offered Courses | Summer 2025 | Bachelor of Business Administration(BBA) | EUB',
//   description:
//     'View the offered courses for the Summer 2025 semester for the Bachelor of Business Administration(BBA) department at EUB. Plan your registration and academic schedule accordingly.',
//   keywords: [
//     'Course offer Summer 2025',
//     'EUB offered courses 2025',
//     'Bachelor of Business Administration(BBA) course registration',
//     'BBA available courses',
//     'University subject list',
//     'Student course enrollment',
//     'Academic offerings EUB',
//     'Current semester courses',
//   ],
// });
const Page = () => {
  return <CourseOffer department='MGDS-ONE-YEAR' type='regular' />;
};

export default Page;
