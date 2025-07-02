import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { DegreeRequirementsSection } from '@/app/(programs)/_components/sections/degree-requirements-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper title='Degree Requirements'>
      <DegreeRequirementsSection
        programDetails={getCurriculumData('evening').programDetails}
      />
    </ContentWrapper>
  );
};

export default Page;
