import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import { CurriculumSection } from '../../_components/curriculum-section';
import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Program Curriculum (Regular)'>
      <CurriculumSection
        coreCoursesData={data.coreCoursesData}
        generalEducationCourses={data.generalEducationCourses}
        basicScienceCourses={data.basicScienceCourses}
        interDisciplinaryCourses={data.interDisciplinaryCourses}
        electiveCourses={data.electiveCourses}
        coursePrefixes={data.coursePrefixes}
        curriculumSummary={data.curriculumSummary}
        foundationCourses={data.foundationCourses}
        projectCourses={data.projectCourses}
        industrialCourses={data.industrialCourses}
      />
    </ContentWrapper>
  );
};

export default Page;
