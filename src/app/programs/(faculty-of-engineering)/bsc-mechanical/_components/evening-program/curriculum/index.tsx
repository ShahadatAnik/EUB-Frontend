import React from 'react';

import { getCurriculumData } from '../../../_const/get-curriculum-data';
import ContentWrapper from '../../content-wrapper';
import { CurriculumSection } from '../../curriculum-section';

const Curriculum = () => {
  const data = getCurriculumData('evening');
  return (
    <ContentWrapper title='Program Curriculum (Evening)'>
      <CurriculumSection
        coreCoursesData={data.coreCoursesData}
        generalEducationCourses={data.generalEducationCourses}
        basicScienceCourses={data.basicScienceCourses}
        interDisciplinaryCourses={data.interDisciplinaryCourses}
        electiveCourses={data.electiveCourses}
        electiveCoursesIPE={data.electiveCoursesIPE}
        projectCourses={data.projectCourses}
        coursePrefixes={data.coursePrefixes}
        curriculumSummary={data.curriculumSummary}
      />
    </ContentWrapper>
  );
};

export default Curriculum;
