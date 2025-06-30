import React from 'react';

import { Program } from '@/types/enum';

import FacultyAndStaff from '@/app/(programs)/_components/faculty-and-staff';

// export const metadata = generateMetaData({
// });

const Page = () => {
  return <FacultyAndStaff department={Program['BA-ENGLISH']} />;
};

export default Page;
