import React from 'react';

import Title from '@/components/title';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import UgcGradingTable from '@/app/(programs)/_components/table/ugc-grading-table';

import PerformanceCriteriaTable from './performance-criteria-table';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The B.Sc. in Industrial and Production Engineering (IPE) program at the
        European University of Bangladesh (EUB) is designed to prepare students
        for careers in industrial operations, production systems, manufacturing
        engineering, and quality management. Through a balanced curriculum of
        theory and lab courses, the program aims to equip graduates with the
        skills necessary to improve productivity, reduce waste, and manage
        technological processes across various industries.
      </p>

      <div>
        <Title variant={'title'} title='Semesters' />
        <p>There are three semesters in an academic year:</p>

        <ul className='mt-2 list-disc space-y-1.5 pl-6'>
          <li className='space-x-1'>
            <strong>Spring semester:</strong> <span>January to April</span>
          </li>
          <li className='space-x-1'>
            <strong>Summer semester:</strong> <span>May to August</span>
          </li>
          <li className='space-x-1'>
            <strong>Fall semester:</strong> <span>September to December</span>
          </li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>Each semester is 17 weeks long, comprising:</p>

        <ul className='mt-2 list-disc space-y-1.5 pl-6'>
          <li>12 weeks for class teaching</li>
          <li>1 week for examination preparation</li>
          <li>3 weeks for examinations</li>
          <li>1 week for government and other holidays</li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <ul className='list-disc space-y-1.5 pl-6'>
          <li>
            Theory Course: 3 credits = 3 lecture hours/week (50 minutes/class)
          </li>
          <li>
            Lab Course: 1 credit = 24 hours/semester, minimum 2-hour sessions
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <ul className='list-disc space-y-1.5 pl-6'>
          <li>Full-time Students: Maximum of 15 credits per semester</li>
          <li>Part-time Students: Maximum of 9 credits per semester</li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-4'>Evaluation Criteria for each course:</p>
        <PerformanceCriteriaTable />

        <div className='mt-8'>
          <p className='mb-4'>
            The university will comply with the uniform grading system suggested
            by UGC as follows.
          </p>
          <UgcGradingTable />
          <p className='mt-4'>
            Incomplete (I) Grade: An Incomplete (I) grade is used in special
            circumstances. An ‘I’ grade may be given only at the end of a
            semester to a student who has completed all other requirements
            except the final examination.
          </p>
        </div>
      </div>

      <div>
        <Title variant={'title'} title='Tuition Fee Structure' />
        <p>(Refer to the Admission Office, EUB)</p>
      </div>
    </ContentWrapper>
  );
};

export default Page;
