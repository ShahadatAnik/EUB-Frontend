import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import { CurriculumSection } from '../../_components/curriculum-section';
import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/evening-program/curriculum',
  title:
    'Civil Engineering (Evening) Curriculum | European University of Bangladesh',
  description:
    'View the complete curriculum for the B.Sc. in Civil Engineering (Evening) program, structured for the needs of professional and diploma-holding students.',
  keywords: [
    'Evening engineering curriculum',
    'CE syllabus for evening batch',
    'Part-time engineering course list',
    'EUB CE evening syllabus',
    'Courses for diploma engineers',
    'Semester-wise evening curriculum',
    'University curriculum for professionals',
    'Evening program subjects',
  ],
});

const Page = () => {
  const data = getCurriculumData('evening');
  return (
    <ContentWrapper title='Program Curriculum (Evening)'>
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
