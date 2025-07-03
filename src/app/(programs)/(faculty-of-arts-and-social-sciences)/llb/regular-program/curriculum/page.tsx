import React from 'react';

import { NonEngineeringCurriculum } from '@/app/(programs)/_components/non-engineering-curriculum';

import { llbCoreCoursesData, llbCoursePrefixes } from '../_config/data';

const Page = () => {
  return (
    <NonEngineeringCurriculum
      coreCoursesData={llbCoreCoursesData}
      coursePrefixes={llbCoursePrefixes}
    />
  );
};

export default Page;
