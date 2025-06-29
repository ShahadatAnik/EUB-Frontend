import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

const Page = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To pass the program, a student must complete the following requirements:
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>
          Students must pass all courses individually and maintain a minimum
          Cumulative Grade Point Average (CGPA) of 2.5
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <p>(Refer to the Office of the Controller of Examination, EUB)</p>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>(36 credits)</p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          (Not applicable; refer to the credit transfer guidelines for credit
          transfer)
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          Students must complete a 3-credit internship/project to fulfill the
          program requirements.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default Page;
