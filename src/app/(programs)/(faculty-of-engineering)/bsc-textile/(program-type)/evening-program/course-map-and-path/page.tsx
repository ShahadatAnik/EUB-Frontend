import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection
        semesterData={getCurriculumData('evening').semesterData}
        backgroundStudents={'For Diploma in Engg. Background Students'}
      />
    </ContentWrapper>
  );
};

export default Page;
