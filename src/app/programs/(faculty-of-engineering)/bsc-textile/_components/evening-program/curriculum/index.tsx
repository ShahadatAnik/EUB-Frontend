import ContentWrapper from '@/app/programs/_components/content-wrapper';
import { CurriculumSection } from '../../sections/curriculum-section';
import { getCurriculumData } from '../../../_const/get-curriculum-data';

export default function ProgramCurriculum() {
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
}
