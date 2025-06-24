import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To graduate from the program, students must complete a total of 132
        credits, consisting of 43 courses (129 credits) and a 3-credit
        internship.
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>
          Students must pass all courses individually and maintain a minimum
          Cumulative Grade Point Average (CGPA) of 2.25.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <p>(Refer to the Office of the Controller of Examination, EUB)</p>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>(132 credits)</p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          (Not applicable; please consult the credit transfer guidelines for
          eligibility and requirements).
        </p>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
