import React from 'react';

import { generateMetaData } from '@/lib/utils';

import StudentServiceDesk from '@/app/(programs)/_components/student-service-desk';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/student-service-desk',
  title: 'CE Student Service Desk | European University of Bangladesh',
  description:
    'Support for Civil Engineering students at EUB. Our Service Desk helps with academic, administrative, and course-related queries, registration, and more.',
  keywords: [
    'Student Service Desk EUB',
    'Civil Engineering student support',
    'EUB student helpdesk',
    'Course advising CE',
    'Student registration help',
    'Academic queries EUB',
    'Credit transfer university',
    'Trimester drop procedure',
  ],
});

const Page = () => {
  return <StudentServiceDesk />;
};

export default Page;
