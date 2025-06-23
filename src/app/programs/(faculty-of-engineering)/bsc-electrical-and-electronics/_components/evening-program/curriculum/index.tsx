import ContentWrapper from '@/app/programs/_components/content-wrapper';

import { EEECurriculumSection } from '@/app/programs/_components/sections/eee-curriculum-section';
import { getCurriculumData } from '../../../_const/get-curriculum-data';

export default function ProgramCurriculum() {
  const data = getCurriculumData('evening');
  return (
    <ContentWrapper title='Program Curriculum (Evening)'>
      <EEECurriculumSection
        coreCoursesData={data.coreCoursesData}
        generalEducationCourses={data.generalEducationCourses}
        basicScienceCourses={data.basicScienceCourses}
        interDisciplinaryCourses={data.interDisciplinaryCourses}
        electiveCourses={data.electiveCourses}
        projectCourses={data.projectCourses}
        coursePrefixes={data.coursePrefixes}
        curriculumSummary={data.curriculumSummary}
      />
    </ContentWrapper>
  );
}
