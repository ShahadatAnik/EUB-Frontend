import React from 'react';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { llbSemesterData } from '../_config/data';

const Page = () => {
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection semesterData={llbSemesterData} />
    </ContentWrapper>
  );
};

export default Page;
