import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          Completion of 45 courses (133 credit hours), plus a 3-credit
          internship.
        </li>
        <li>
          Successful completion of all courses with a minimum Cumulative Grade
          Point Average (CGPA) of 2.25.
        </li>
        <li>A minimum grade of ‘C’ is required for the internship report.</li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
