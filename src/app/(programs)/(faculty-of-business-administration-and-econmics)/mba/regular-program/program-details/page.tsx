import React from 'react';

import Link from 'next/link';

import Title from '@/components/title';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import PerformanceCriteriaTable from '@/app/programs/_components/performance-criteria-table';
import UgcGradingTable from '@/app/programs/_components/ugc-grading-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The Master of Business Administration (MBA) program at the European
        University of Bangladesh is designed to provide students with a
        comprehensive understanding of contemporary business and management
        principles. The program is tailored for recent graduates entering the
        job market and individuals aspiring to become entrepreneurs. It offers
        concentrations in Finance, Accounting, Human Resource Management, and
        Marketing.
      </p>

      <div>
        <Title variant={'title'} title='Semesters' />
        <p>
          The program comprises 6 semesters (trimesters), each spanning four
          months. Of these, 5 semesters are dedicated to coursework, while the
          final semester is reserved for an internship or project. The academic
          year is structured into three semesters: Spring, Summer, and Fall.
        </p>

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
        <p>Duration of the program is 2 years (6 Semesters).</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <p>
          The program comprises 63 credits, including a 3-credit
          internship/project.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <p>
          In each semester, students are required to complete four courses,
          totaling 12 credits. In the 6th semester, they must undertake a
          3-credit internship/project.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-4'>
          The final grade for each course will be determined based on
          students&lsquo; performance in class attendance, continuous assessment
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
        <p>
          <Link
            href='/tuition-and-other-fees-structure'
            className='text-blue-600 underline'
          >
            Please go here for tuition fee structure
          </Link>
        </p>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
