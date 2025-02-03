import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          Students must complete 41 courses (123 credit hours) along with a
          3-credit internship.
        </li>
        <li>
          To graduate, they must pass all courses individually and maintain a
          minimum Cumulative Grade Point Average (CGPA) as determined by the
          university.
        </li>
        <li>The minimum passing grade for the internship is “C.”</li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
