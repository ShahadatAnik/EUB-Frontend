import React from 'react';

import Title from '@/components/title';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

import PerformanceCriteriaTable from './performance-criteria-table';
import TuitionFeesTable from './tuition-fees-table';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <div>
        <Title variant={'title'} title='Semesters' />

        <p className='mt-1'>
          There will be two semesters in an academic year, which are namely:
        </p>

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>Spring Semester; (Duration: January to June)</li>
          <li>Summer Semester; (Duration: July to December) </li>
        </ul>

        <p className='mt-2'>
          Each semester will be of 26 weeks duration with 22 weeks for class
          teaching, two weeks break for examination preparation and two weeks
          for examinations. In addition, midterm examination will be held after
          12 weeks with 11 weeks class teaching and one week examination
          preparation.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Duration of the Program' />

        <p className='mt-1'>
          The duration for B.Sc. in Mechanical Engineering program will be four
          years divided into 8 semesters.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            <strong>Theory Course:</strong> 3 credit hours = 3 hours of lecture
            per week. (Minimum 50 minutes per class).
          </li>
          <li>
            <strong>Sessional Course:</strong> 1 credit hour = minimum 24 hours
            of actual lab work per semester. (Minimum 2-hour lab class).
          </li>
        </ul>
      </div>
      <div>
        <Title
          variant={'title'}
          title='Course load / Conditions applicable for enrolling students of
          Mechanical Program'
        />

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            <strong>Regular students:</strong> Maximum 20.125 credits per
            semester (Total 161.0 credits over 8 semesters).
          </li>
          <li>
            <strong>Diploma holders:</strong> Maximum 20.285 credits per
            semester (Total 142.0 credits over 7 semesters).
          </li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-2'>
          Final grade in each course will be given on the basis of the
          performance on class attendance & participation, continuous
          assessment, mid-term examination and final examination as indicated as
          under
        </p>
        <PerformanceCriteriaTable />
      </div>

      <div>
        <Title variant={'title'} title='Tuition Fee Structure' />

        <p className='mt-1'>
          Total cost of the program ranges from Taka 9,25,000 to Taka 10,25,000,
          depending on the standing of the student at the time of admission. All
          fees are subject to change. Please check with the BBA Program Office
          for the most recent fee structure.
        </p>

        <div className='mt-4'>
          <TuitionFeesTable />
        </div>

        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            Please note that all students must pay a non-refundable, one time
            only admission fee Admission Fee 25,000/-
          </li>
          <li>
            Each student has to pay 10,000/-as Caution money (Refundable) during
            the time of admission
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default Page;
