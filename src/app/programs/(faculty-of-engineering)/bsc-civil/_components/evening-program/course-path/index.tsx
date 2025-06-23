import ContentWrapper from '@/app/programs/_components/content-wrapper';

import { getCurriculumData } from '../../../_const/get-curriculum-data';
import { CourseMapSection } from '@/app/programs/_components/sections/course-map-section';

export default function CoursePath() {
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
}
