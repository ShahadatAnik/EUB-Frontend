import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { programDetails } from '../../_config/data';

export const DegreeRequirementsSection = React.memo(() => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>2.4. Degree Requirement</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div>
          <h4 className='font-semibold mb-2'>
            2.4.1. Minimum GPA to pass program: {programDetails.minimumGPA}
          </h4>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>
            2.4.2. Supplementary rules & cost:
          </h4>

          <div className='space-y-4'>
            <div>
              <h5 className='font-medium mb-2'>
                1. Course Withdrawal: If a student cannot complete the semester
                Final Examination due to illness, accident, or any other valid
                reason, etc., he/she may apply for withdrawal from a semester.
                The following steps will be maintained during withdrawal:
              </h5>
              <div className='ml-4 space-y-1'>
                <p>
                  i. The student will collect the withdrawal form from the
                  registrar office cluster-I.
                </p>
                <p>
                  ii. After collecting the withdrawal form, the student will
                  fill up the form and take the sign from the exam control
                  office cluster-I.
                </p>
                <p>
                  iii. After that, the student will take the sign from the
                  course advisor and chairman of the department.
                </p>
                <p>
                  iv. Students will collect the fee deposit form from the
                  account section of the university.
                </p>
                <p>
                  v. After filling up the fee deposit form, students will
                  deposit the withdrawal fee in the account section of the
                  university.
                </p>
                <p>
                  vi. Students will submit the withdrawal form and fee deposit
                  form to the registrar office cluster-I.
                </p>
              </div>
            </div>

            <div>
              <h5 className='font-medium mb-2'>
                2. Incomplete (I) courses: In theory courses, if any student
                failed to attend any course&apos;s Final examination, then
                he/she will get Incomplete (I) in that course. In that case,
                he/she might get grades after attending the supplementary
                examination. In Lab or Sessional Courses, if any student failed
                to attend the final lab quiz, then he/she will get Incomplete
                (I) in that course. In that case, he/she must retake that
                course.
              </h5>
            </div>

            <div>
              <h5 className='font-medium mb-2'>
                3. Retake: Students can retake a course (Theory/Sessional/Lab).
                In the case of a theory course, the student can retake a course
                if the student fails in that course and cannot secure pass marks
                even after giving the supplementary examination. In the case of
                a lab/sessional course, a student can retake a course if the
                student fails or could not complete that course.
              </h5>
            </div>

            <div>
              <h5 className='font-medium mb-2'>
                4. Grade Improvement: The supplementary examinations will
                provide additional opportunities to the students failing to
                attend scheduled terms and final examinations for verified and
                valid reasons as per rules.
              </h5>
            </div>

            <div>
              <h5 className='font-medium mb-2'>
                5. Dropout: Same procedure as Course Withdrawal.
              </h5>
            </div>
          </div>
        </div>

        <div>
          <h4 className='font-semibold mb-2'>
            2.4.3. Total Credits of Course:
          </h4>
          <p>
            A student will be awarded Bachelor of Science (B. Sc.) in Textile
            Engineering degree after completion of a minimum{' '}
            {programDetails.creditHours} credits.
          </p>
        </div>
      </CardContent>
    </Card>
  );
});

DegreeRequirementsSection.displayName = 'DegreeRequirementsSection';
