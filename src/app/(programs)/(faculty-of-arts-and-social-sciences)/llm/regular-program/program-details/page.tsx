import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import PerformanceCriteriaTable from '@/app/(programs)/_components/performance-criteria-table';
import UgcGradingTable from '@/app/(programs)/_components/ugc-grading-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The LL.M. (Preliminary) program is a one-year degree divided into 2
        semesters. The LL.M. (Final) program is also a one-year degree divided
        into 2 semesters. An academic year consists of two semesters: Spring
        (January – June), Summer (July– December). Each semester lasts 26 weeks,
        including 20 weeks of classroom instruction, one week for examination
        preparation, and three weeks for examinations. The medium of instruction
        for the program is English, ensuring students develop strong legal
        communication skills. Additionally, all courses in the LL.M. programs
        are compulsory, providing a comprehensive legal education that prepares
        graduates for careers in the legal profession and related fields.
      </p>

      <div>
        <Title variant={'title'} title='Semesters' />
        <p>
          The program comprises 2 semesters, each spanning six months. In the
          2nd semester, they must undertake a 6-credit Legal Research and
          Monograph. The academic year is structured into two semesters: Spring,
          and Summer.
        </p>

        <ul className='mt-2 list-disc space-y-1.5 pl-6'>
          <li className='space-x-1'>
            <strong>Spring semester:</strong> <span>January to June, and</span>
          </li>
          <li className='space-x-1'>
            <strong>Summer semester:</strong> <span>July to December</span>
          </li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>The duration of the program is 1 year (2 Semesters).</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>36</p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <p>
          In each semester, students are required to complete four courses,
          totaling 12 credits. In the 12th semester, they must undertake a
          3-credit internship/project along with a 1-credit Applied Research
          Methodology course.
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
