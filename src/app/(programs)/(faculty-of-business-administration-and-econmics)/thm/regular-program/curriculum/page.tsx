import React from 'react';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import { CurriculumSection } from '../_components/curriculum-section';
import { getBthmCurriculumData } from '../_config/get-curriculum-data';

const Curriculum = () => {
  const data = getBthmCurriculumData();
  return (
    <ContentWrapper title='Program Curriculum'>
      <CurriculumSection
        coreCoursesData={data.coreCoursesData}
        generalEducationCourses={data.generalEducationCourses}
        specializationCourses={data.specializationCourses}
        internshipCourses={data.internshipCourses}
        prerequisiteCourses={data.prerequisiteCourses}
        coursePrefixes={data.coursePrefixes}
      />
    </ContentWrapper>
  );
};

export default Curriculum;
