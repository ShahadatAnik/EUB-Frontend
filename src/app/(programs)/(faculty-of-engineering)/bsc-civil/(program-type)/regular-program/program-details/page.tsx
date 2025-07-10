import React from 'react';

import Title from '@/components/title';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import PerformanceCriteriaTable from './performance-criteria-table';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/regular-program/program-details',
  title:
    'B.Sc. in Civil Engineering Program Details | European University of Bangladesh',
  description:
    'Learn about the 4-year B.Sc. in Civil Engineering at EUB. Details on the 12-semester structure, credit hours, course load, and performance evaluation.',
  keywords: [
    'B.Sc. in Civil Engineering details',
    'Civil Engineering curriculum EUB',
    'CE program structure',
    'University course load',
    '4-year engineering degree',
    'Credit hours Civil Engineering',
    'Semester details EUB',
    'Performance evaluation university',
  ],
});

const Page = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The Bachelor of Science in Civil Engineering at the European University
        of Bangladesh (EUB) equips students with the knowledge and practical
        skills necessary for designing, constructing, and maintaining
        infrastructure projects that shape the modern world. From bridges and
        roads to buildings and water supply systems, the Civil Engineering
        program empowers future engineers to innovate and contribute
        meaningfully to sustainable development. The program is supported by
        dedicated faculty members and modern lab facilities, ensuring that
        students receive both theoretical understanding and hands-on experience.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          The program comprises 12 semesters, with each semester lasting four
          months. These are distributed across the academic year as follows:
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>Spring Semester (January - April)</li>
          <li>Summer Semester (May - August)</li>
          <li>Fall Semester (September - December)</li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>The duration of the program is 4 years (12 semesters).</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>The program consists of 165 credits.</p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <p>
          Each semester includes 12 weeks of classes, covering theory and
          practical courses, as well as project and thesis work in the later
          stages of the program.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-4'>
          The final grade for each course will be determined based on
          students&apos; performance in class attendance, continuous assessment
          (including class tests, assignments, presentations, etc.), midterm
          examination, and final examination as outlined below.
        </p>

        <PerformanceCriteriaTable />
      </div>
    </ContentWrapper>
  );
};

export default Page;
