import React from 'react';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

const Page = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-2'>
      <ul className='list-disc space-y-2 pl-6'>
        <li>
          To obtain the MS in Economics degree, students must complete 39
          credits over 3 semesters.
        </li>
      </ul>
    </ContentWrapper>
  );
};

export default Page;
