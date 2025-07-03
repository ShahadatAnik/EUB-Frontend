import React from 'react';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { getBthmCurriculumData } from '../_config/get-curriculum-data';

const Page = () => {
  const data = getBthmCurriculumData();
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection
        semesterData={data.semesterData}
        title='Year-wise & Semester-wise Course Distribution'
      />
    </ContentWrapper>
  );
};

export default Page;
