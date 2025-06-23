import ContentWrapper from '@/app/programs/_components/content-wrapper';
import { getCurriculumData } from '../../../_const/get-curriculum-data';
import { EEECurriculumSection } from '@/app/programs/_components/sections/eee-curriculum-section';

export default function ProgramCurriculum() {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Program Curriculum (Regular)'>
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
