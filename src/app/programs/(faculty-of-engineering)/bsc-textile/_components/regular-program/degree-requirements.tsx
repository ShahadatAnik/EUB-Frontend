import React from 'react';
import ContentWrapper from '../content-wrapper';

import { getCurriculumData } from '../../_const/get-curriculum-data';
import { DegreeRequirementsSection } from '@/app/programs/_components/sections/degree-requirements-section';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements'>
      <DegreeRequirementsSection
        programDetails={getCurriculumData('regular').programDetails}
      />
    </ContentWrapper>
  );
};

export default DegreeRequirements;
