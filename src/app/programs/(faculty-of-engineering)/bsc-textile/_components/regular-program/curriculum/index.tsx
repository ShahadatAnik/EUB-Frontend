import ContentWrapper from '@/app/programs/_components/content-wrapper';
import { CourseMapSection } from './_components/sections/course-map-section';
import { CurriculumSection } from './_components/sections/curriculum-section';
import { DegreeRequirementsSection } from './_components/sections/degree-reuirements-section';
import { ProgramDetailsSection } from './_components/sections/program-details-section';

export default function ProgramCurriculum() {
  return (
    <ContentWrapper title='Program Curriculum (Regular)'>
      <ProgramDetailsSection />
      <CurriculumSection />
      <CourseMapSection />
      <DegreeRequirementsSection />
    </ContentWrapper>
  );
}
