import React from 'react';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { llmSemesterData } from '../_config/data';

const CoursePath = () => {
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection
        disabledTitle
        showTotal={false}
        showTitle={false}
        semesterData={llmSemesterData}
      />
    </ContentWrapper>
  );
};

export default CoursePath;
