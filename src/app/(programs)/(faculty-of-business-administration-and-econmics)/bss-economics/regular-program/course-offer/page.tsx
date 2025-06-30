import React from 'react';

import { Program } from '@/types/enum';

import CourseOffer from '@/app/(programs)/_components/course-offer';

// import { generateMetaData } from '@/lib/utils';

// export const metadata = generateMetaData({

// });
const Page = () => {
  return <CourseOffer department={Program['BSS-ECONOMICS']} type='regular' />;
};

export default Page;
