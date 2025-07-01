import React from 'react';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import { DegreeRequirementsSection } from '@/app/(programs)/_components/sections/degree-requirements-section';

import { getCurriculumData } from '../../_config/get-curriculum-data';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/evening-program/degree-requirements',
  title: 'CE (Evening) Degree Requirements | European University of Bangladesh',
  description:
    'Understand the graduation requirements for the Civil Engineering evening program at EUB, including total credits, GPA, and policies for working students.',
  keywords: [
    'Evening degree requirements',
    'Graduation requirements for diploma holders',
    'Part-time degree rules',
    'EUB evening program policy',
    'Minimum GPA for evening degree',
    'CE degree for professionals',
    'Academic requirements for evening students',
    'University graduation policy',
  ],
});

const Page = () => {
  return (
    <ContentWrapper title='Degree Requirements'>
      <DegreeRequirementsSection
        programDetails={getCurriculumData('evening').programDetails}
        registerOffice='registrar office cluster-II'
      />
    </ContentWrapper>
  );
};

export default Page;
