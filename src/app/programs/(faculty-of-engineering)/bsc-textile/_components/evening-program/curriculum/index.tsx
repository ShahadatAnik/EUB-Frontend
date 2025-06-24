import ContentWrapper from '@/app/programs/_components/content-wrapper';

import { getCurriculumData } from '../../../_const/get-curriculum-data';
import { CurriculumSection } from '../../curriculum-section';

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
