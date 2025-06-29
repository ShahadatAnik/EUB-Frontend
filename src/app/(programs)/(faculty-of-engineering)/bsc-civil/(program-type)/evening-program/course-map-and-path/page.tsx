import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { CourseMapSection } from '@/app/(programs)/_components/sections/course-map-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/evening-program/course-map-and-path',
  title: 'Civil Engineering (Evening) Course Map | EUB',
  description:
    'See the detailed course map and academic path for the Civil Engineering evening program. Plan your studies semester by semester to fit your schedule.',
  keywords: [
    'Evening program academic path',
    'CE course sequence evening',
    'Part-time degree plan',
    'Engineering course map for professionals',
    'EUB evening program roadmap',
    'Academic planning for working students',
    'Flexible study plan',
    'University course path evening',
  ],
});

const Page = () => {
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection
        semesterData={getCurriculumData('evening').semesterData}
        backgroundStudents={
          getCurriculumData('evening').programDetails.backgroundStudents
        }
      />
    </ContentWrapper>
  );
};

export default Page;
