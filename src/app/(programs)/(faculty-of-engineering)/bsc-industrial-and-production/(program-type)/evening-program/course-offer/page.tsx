import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import CourseOffer from '@/app/(programs)/_components/course-offer';

// export const metadata = generateMetaData({});

const Page = () => {
  return <CourseOffer department={Program['BSC-IP']} type='evening' />;
};

export default Page;
