import React from 'react';

import ContentWrapper from '../../content-wrapper';
import { ProgramDetailsSection } from '@/app/programs/_components/sections/program-details';
import { getCurriculumData } from '../../../_const/get-curriculum-data';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <ProgramDetailsSection
        programDetails={getCurriculumData('evening').programDetails}
        performanceEvaluation={
          getCurriculumData('evening').performanceEvaluation
        }
        semesterInfo={getCurriculumData('evening').semesterInfo}
      />
    </ContentWrapper>
  );
};

export default ProgramDetails;
