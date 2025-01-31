import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          Completion of 11 courses (33 credit hours) and a 3-credit project.
        </li>
        <li>
          Successful completion of all courses individually with a minimum
          Cumulative Grade Point Average (CGPA) of 2.25.
        </li>
        <li>A minimum grade of ‘C’ is required to pass the project.</li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
