import React from 'react';

import { NonEngineeringCurriculum } from '@/app/(programs)/_components/non-engineering-curriculum';

import { llmCoreCoursesData, llmCoursePrefixes } from '../_config/data';

const Curriculum = () => {
  return (
    <NonEngineeringCurriculum
      coreCoursesData={llmCoreCoursesData}
      coursePrefixes={llmCoursePrefixes}
    />
  );
};

export default Curriculum;
