import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/regular-program/course-map-and-path',
  title:
    'Civil Engineering Course Map & Path | European University of Bangladesh',
  description:
    'View the detailed course map and academic path for the B.Sc. in Civil Engineering at EUB. Plan your studies with our semester-by-semester course sequence.',
  keywords: [
    'Civil Engineering course map',
    'EUB academic pathway',
    'Engineering program roadmap',
    'Semester course plan',
    'CE course sequence',
    'University academic planning',
    'Four-year degree plan',
    'Course path for engineers',
  ],
});

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
