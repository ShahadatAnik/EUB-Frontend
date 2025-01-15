import React from 'react';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='py-4'>
      <div>
        <p>
          A student must complete 120 credits with a minimum CGPA of 2.00/4.00
          to earn the BBA degree. To continue in the program a student must be
          in good standing (i.e. maintain a minimum CGPA of 2.00/4.00 at all
          levels of academic advancement). If in any semester the CGPA drops
          below 2.00 the student is put on academic probation. A student will be
          dismissed after being on probation for three consecutive semesters.
        </p>

        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            ENG 102 & BUS 112 is not compulsory for those who received a waiver
            in these courses in based on Admission Test. Others must have to
            complete these courses for Degree completion.
          </li>
          <li>
            To qualify for degree, a student must maintain a minimum CGPA of
            2.00 out of 4.00 in both School Core Courses & BBA Core Courses.
          </li>
          <li>
            Minimum GPA 2.50 is required in order to declare the Major or at
            least 2.00 is required to be eligible for the BBA degree.
          </li>
          <li>
            For single major students required to complete 126 credits including
            ENG 102 & BUS 112.
          </li>
          <li>
            For dual major students required to complete 135 credits including
            ENG 102 & BUS 112.
          </li>
          <li>Internship ( BUS 498) is mandatory non-credit course.</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
