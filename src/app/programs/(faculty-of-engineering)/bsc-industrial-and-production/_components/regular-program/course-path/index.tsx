import ContentWrapper from '@/app/programs/_components/content-wrapper';
import { CourseMapSection } from '@/app/programs/_components/sections/course-map-section';

import { getCurriculumData } from '../../../_const/get-curriculum-data';

export default function CoursePath() {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Course Map and Path (Regular)'>
      <CourseMapSection
        title='Course Offered in Different Terms for B. Sc. Engg. (Industrial and Production Engineering) Degree'
        semesterData={data.semesterData}
        backgroundStudents={data.programDetails.backgroundStudents}
      />
    </ContentWrapper>
  );
}
