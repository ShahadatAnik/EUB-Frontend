import React from 'react';

import { Program } from '@/types/enum';

import CourseOffer from '@/app/(programs)/_components/course-offer';

// export const metadata = generateMetaData({
// });
const Page = () => {
  return (
    <CourseOffer department={Program['MA-ENGLISH-TWO-YEAR']} type='regular' />
  );
};

export default Page;
