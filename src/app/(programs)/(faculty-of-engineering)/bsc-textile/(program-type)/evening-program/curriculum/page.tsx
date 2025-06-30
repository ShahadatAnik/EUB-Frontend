import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import { CurriculumSection } from '../../_components/curriculum-section';
import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
  const data = getCurriculumData('evening');
  return (
    <ContentWrapper title='Program Curriculum (Evening)'>
      <CurriculumSection
        textileEngineeringCourses={data.textileEngineeringCourses}
        nonDepartmentalCourses={data.nonDepartmentalCourses}
        electiveCourses={data.electiveCourses}
        projectCourses={data.projectCourses}
        coursePrefixes={data.coursePrefixes}
        curriculumSummary={data.curriculumSummary}
      />
    </ContentWrapper>
  );
};

export default Page;
