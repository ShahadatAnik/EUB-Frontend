import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection
        semesterData={data.semesterData}
        backgroundStudents={data.programDetails.backgroundStudents}
      />
    </ContentWrapper>
  );
};

export default Page;
