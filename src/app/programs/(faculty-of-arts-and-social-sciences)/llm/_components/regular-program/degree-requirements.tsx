import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Successfully complete 36 credit hours.</li>
        <li>
          Pass all courses individually and maintain a minimum CGPA of 2.5.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
