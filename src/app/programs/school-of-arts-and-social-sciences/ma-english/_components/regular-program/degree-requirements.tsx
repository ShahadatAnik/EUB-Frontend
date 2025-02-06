import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          To earn the M.A. degree from EUB, students must successfully complete
          all 12 courses within the program.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
