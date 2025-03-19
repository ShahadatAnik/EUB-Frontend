import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Completion of minimum 160.50 credit hours for Regular Students.</li>
        <li>Completion of minimum 140.00 credit hours for Diploma Students.</li>
        <li>
          Passing all courses individually and maintaining a minimum CGPA of
          2.50.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
