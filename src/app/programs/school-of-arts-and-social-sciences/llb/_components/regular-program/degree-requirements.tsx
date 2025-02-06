import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>
          To earn the <strong>LL.B. (Hons.)</strong> degree, students must
          successfully complete <strong>125 credit hours</strong>.
        </li>
        <li>
          Additionally, they must pass all courses individually and maintain a
          <strong>minimum CGPA of 2.5</strong>.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
