import React from 'react';

import ContentWrapper from '../../content-wrapper';
import Title from '@/components/title';

import PerformanceCriteriaTable from './performance-criteria-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The Bachelor of Science in Textile Engineering at the European
        University of Bangladesh is designed to equip students with in-depth
        knowledge and practical skills in textile science, manufacturing, and
        production. The program emphasizes hands-on learning, integrating
        laboratory work, field activities, and real-world projects to prepare
        graduates for the dynamic demands of the global textile industry.
        EUB&apos;s experienced faculty ensures that students receive both
        academic guidance and professional mentorship, helping them excel in
        both local and international textile sectors.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          The academic year is divided into three semesters:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          {' '}
          <li>Spring Semester (January – April)</li>
          <li>Summer Semester (May – August)</li>
          <li>Fall Semester (September – December)</li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>The program duration is 4 years, consisting of 12 semesters.</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>The total program requires completion of 165 credits.</p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <p>Each semester spans 16 weeks, broken down as follows:</p>

        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>12 Weeks of Classes</li> <li>2 Weeks for Examinations</li>
          <li>2 Weeks for Result Processing</li>
        </ul>
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

export default ProgramDetails;
