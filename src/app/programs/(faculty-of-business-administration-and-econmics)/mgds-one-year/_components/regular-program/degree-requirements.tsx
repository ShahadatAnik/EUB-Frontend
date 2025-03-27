import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          To obtain the MS in Economics degree, students must complete 75 credit
          hours over six semesters.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
