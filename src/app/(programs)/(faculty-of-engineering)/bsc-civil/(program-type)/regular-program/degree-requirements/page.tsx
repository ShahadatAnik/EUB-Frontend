import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { DegreeRequirementsSection } from '@/app/(programs)/_components/sections/degree-requirements-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/regular-program/degree-requirements',
  title:
    'Civil Engineering Degree Requirements | European University of Bangladesh',
  description:
    'Understand the degree requirements for the B.Sc. in Civil Engineering at EUB, including minimum GPA, total credits, course withdrawal, and retake policies.',
  keywords: [
    'Civil Engineering degree requirements',
    'EUB graduation requirements',
    'Minimum GPA for engineering',
    'Total credits for CE degree',
    'University course retake policy',
    'Course withdrawal rules',
    'Academic requirements EUB',
    'How to get a CE degree',
  ],
});

const Page = () => {
  return (
    <ContentWrapper title='Degree Requirements'>
      <DegreeRequirementsSection
        programDetails={getCurriculumData('regular').programDetails}
        registerOffice='registrar office cluster-II'
      />
    </ContentWrapper>
  );
};

export default Page;
