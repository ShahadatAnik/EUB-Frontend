import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { ProgramDetailsSection } from '@/app/(programs)/_components/sections/program-details';

import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
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

export default Page;
