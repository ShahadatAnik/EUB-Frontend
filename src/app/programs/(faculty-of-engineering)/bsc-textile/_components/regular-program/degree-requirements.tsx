import React from 'react';
import ContentWrapper from '../content-wrapper';
import Title from '@/components/title';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To complete the Bachelor of Science in Textile program successfully,
        students must meet the following requirements:
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>Students must maintain a minimum CGPA of 2.20 to graduate.</p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            <strong>Course Withdrawal:</strong> Requires formal application and
            departmental approvals. Applicable in cases like illness or
            accidents.
          </li>
          <li>
            <strong>Incomplete (I) Grade:</strong> Assigned when a student
            misses final exams or lab quizzes; must complete through
            supplementary exams or course retake.
          </li>
          <li>
            <strong>Retake:</strong> Allowed for both theory and lab courses if
            students fail or cannot complete the course.
          </li>
          <li>
            <strong>Grade Improvement:</strong> Supplementary exams are
            available for students with valid reasons.
          </li>
          <li>
            <strong>Dropout:</strong> Follows the same procedure as course
            withdrawal.
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>
          A student will be awarded the Bachelor of Science (B.Sc.) in Textile
          Engineering degree after completing a minimum of 165 credits.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            Students with a <strong>Diploma in Engineering background</strong>{' '}
            may receive a 25-credit waiver, equivalent to the 1st year (1st and
            2nd semesters).
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          Students must complete all theoretical and practical requirements,
          including a final project or thesis component.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
