import React from 'react';
import ContentWrapper from '../content-wrapper';
import { DegreeRequirementsSection } from '../../../../_components/sections/degree-requirements-section';
import { getCurriculumData } from '../../_const/get-curriculum-data';

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
