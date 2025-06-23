import ContentWrapper from '@/app/programs/_components/content-wrapper';
import { getCurriculumData } from '../../../_const/get-curriculum-data';
import { CourseMapSection } from '@/app/programs/_components/sections/course-map-section';

export default function CoursePath() {
  const data = getCurriculumData('regular');
  return (
    <ContentWrapper title='Course Map and Path'>
      <CourseMapSection semesterData={data.semesterData} />
    </ContentWrapper>
  );
}
