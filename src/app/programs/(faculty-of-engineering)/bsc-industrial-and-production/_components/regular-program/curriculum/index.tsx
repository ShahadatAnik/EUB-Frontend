import ContentWrapper from '@/app/programs/_components/content-wrapper';

import { getCurriculumData } from '../../../_const/get-curriculum-data';
import { CurriculumSection } from '../../curriculum-section';

export default function ProgramCurriculum() {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Program Curriculum (Regular)'>
      <CurriculumSection
        coreCoursesData={data.coreCoursesData}
        generalEducationCourses={data.generalEducationCourses}
        electiveCourses={data.electiveCourses}
        coursePrefixes={data.coursePrefixes}
      />
    </ContentWrapper>
  );
}
