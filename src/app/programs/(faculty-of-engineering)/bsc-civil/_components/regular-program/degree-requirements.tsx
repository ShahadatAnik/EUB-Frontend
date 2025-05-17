import React from 'react';
import ContentWrapper from '../content-wrapper';
import Title from '@/components/title';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To complete the Civil Engineering program successfully, students must
        meet the following requirements:
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>Students must maintain a minimum CGPA of 2.20.</p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <ul className='list-disc pl-6 space-y-2'>
          <li>
            <p>
              <strong>Course Withdrawal:</strong> Students unable to complete
              semester final exams due to valid reasons (e.g., illness) may
              apply for withdrawal through the Registrar’s Office and follow
              proper procedural steps including approval and fee submission.
            </p>
          </li>
          <li>
            <p>
              <strong>Incomplete (I) Grades:</strong> If a student misses a
              final exam (theory or lab), they will receive an “I” grade and
              must complete a supplementary examination or retake the course.
            </p>
          </li>
          <li>
            <p>
              <strong>Retake:</strong> Permitted if a student fails to secure a
              passing grade, even after supplementary exams.
            </p>
          </li>
          <li>
            <p>
              <strong>Grade Improvement:</strong> Allowed through supplementary
              exams with proper justification.
            </p>
          </li>
          <li>
            <p>
              <strong>Dropout Policy: </strong> Follows the same procedure as
              course withdrawal.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>(165 credits)</p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          (Not specified; please refer to the credit transfer or departmental
          guidelines)
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          (Not specified; may include project/thesis as outlined in evaluation
          criteria)
        </p>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
