import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import PerformanceCriteriaTable from '@/app/(programs)/_components/performance-criteria-table';
import UgcGradingTable from '@/app/(programs)/_components/ugc-grading-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The MSS in Economics is a 39-credit-hour program spanning three
        semesters.The program is conducted in English, and students must
        maintain a CGPA of 3.00 or higher to graduate. If a student fails a
        course, they may retake the examination in a subsequent semester to
        improve their grade.
      </p>

      <div>
        <Title variant={'title'} title='Semesters' />
        <p>3 semesters</p>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>1 Year</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>39</p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
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

export default ProgramDetails;
