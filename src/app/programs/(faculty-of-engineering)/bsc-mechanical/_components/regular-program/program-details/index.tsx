import React from 'react';

import Title from '@/components/title';

import PerformanceCriteriaTable from '@/app/programs/_components/performance-criteria-table';
import UgcGradingTable from '@/app/programs/_components/ugc-grading-table';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The B.Sc. in Mechanical Engineering program at the European University
        of Bangladesh (EUB) is designed for students who aspire to contribute to
        innovation and advancement in the field of mechanical systems, energy,
        manufacturing, and automation. This program equips students with a solid
        foundation in engineering principles, practical lab skills, and
        industry-relevant experience to meet the challenges of modern
        engineering. The curriculum integrates theoretical knowledge with
        hands-on learning, including training, lab work, and tours to prepare
        students for both professional and academic growth.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          There are two semesters in an academic year:
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>Spring Semester: January to June</li>
          <li>Summer Semester: July to December</li>
        </ul>
        <p className='mt-2'>Each semester spans 26 weeks, with:</p>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>22 weeks of class teaching</li>
          <li>2 weeks for examination preparation</li>
          <li>2 weeks for examinations</li>
        </ul>
        <p className='mt-2'>
          Midterm examinations are conducted after 12 weeks, following 11 weeks
          of class instruction and one week of preparation.
        </p>
      </div>

      <div>
        <Title variant={'title'} title='Duration' />
        <p>The duration of the program is 4 years, divided into 8 semesters.</p>
      </div>
      <div>
        <Title variant={'title'} title='Credit Hour' />
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            Theory Courses: 3 credit hours = 3 hours of lecture per week
            (minimum 50 minutes per class)
          </li>
          <li>
            Sessional Courses: 1 credit hour = minimum 24 hours of actual lab
            work per semester (minimum 2-hour lab class)
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Course Load' />
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            Regular Students: Up to 20.125 credits per semester (Total: 161.0
            credits over 8 semesters)
          </li>
          <li>
            Diploma Holders: Up to 20.285 credits per semester (Total: 142.0
            credits over 7 semesters)
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Performance Evaluation Criterion' />
        <p className='mb-4'>
          Final grades in each course are based on the following breakdown:
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
