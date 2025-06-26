import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import { CurriculumSection } from '../../_components/curriculum-section';
import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/regular-program/curriculum',
  title:
    'B.Sc. in Civil Engineering Curriculum | European University of Bangladesh',
  description:
    'View the complete curriculum for the B.Sc. in Civil Engineering at EUB. See a semester-by-semester breakdown of all courses, from foundation to core subjects.',
  keywords: [
    'Civil Engineering curriculum',
    'BSc in CE course list',
    'EUB CE syllabus',
    'Semester-wise engineering courses',
    'Engineering course breakdown',
    'CE course codes',
    'Structural Analysis course',
    'Geotechnical Engineering course',
  ],
});

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
      />
    </ContentWrapper>
  );
};

export default Page;
