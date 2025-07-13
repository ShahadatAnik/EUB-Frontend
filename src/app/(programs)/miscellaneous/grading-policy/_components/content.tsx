import React from 'react';

import GradingTable from './grading-table';
import SectionContent from './section-content';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <SectionContent
          title='Grading System'
          content='A uniform grading system approved by the University Grants Commission of Bangladesh (UGC), the highest controlling authority of the universities in Bangladesh for all universities (public, private) is followed for the placement of students in different grades. All coursework is graded according to a unified grading system as shown in the following chart.
'
        />
        <GradingTable />

        {/* <SectionContent
          title={`Grade Change`}
          content='Grade change is strongly discouraged. Letter grades may be changed only for posting errors or errors in calculation. If a grade change is inevitable, it must be completed within one semester following the submission of the grade. The program directors and department chairs will ask for necessary papers and records to substantiate the grade change.'
        /> */}
        {/* <SectionContent
          title={`Incomplete (I)`}
          content={
            <p>
              The grade of Incomplete (I) may be used in special circumstances.
              The Incomplete may be given only at the end of a semester to a
              student whose work is progressing but who has left unfinished a
              small amount of work for completion without further class
              attendance. The instructor must file with the Registrar an
              Incomplete Grade form describing the work to be completed,
              indicating a tentative final grade to be assigned if the work is
              not completed and the time period in which the work must be
              completed (no longer than the following semester).
              <br />
              The student has the responsibility to take the initiative in
              completing the work and is expected to make up the incomplete as
              specified by the instructor. If action is not taken, the
              &quot;I&#34; grade will revert to the tentative final grade. The
              final grade becomes an &quot;F&quot; if no tentative grade is
              assigned. In the event the instructor from whom a student received
              an incomplete is not available, the disposition of a case
              involving an incomplete grade resides with the Chair of the
              department. The grade &apos;I&apos; must be replaced within one
              semester after the grade is assigned.
            </p>
          }
        /> */}
        {/* <SectionContent
          title={`Withdrawal (W)`}
          content={`The grade Withdrawal (W) is assigned when a student officially drops a course during the period between the ends of the third and twelfth weeks. Prior to that time if a student drops a course, no entry is made on the academic record. A "W" does not affect the student's GPA.`}
        /> */}
        {/* <SectionContent
          title={`Retaking Courses`}
          content={`A student may repeat a course in which the grade is 'B' or lower. When a student retakes a course, the actual grade will be recorded. In case of a retake course, only the best grade will be used to calculate the CGPA. An "F" grade earned in any credit course will be used to calculate CGPA until the course is retaken/ replaced by taking another appropriate course, and a better grade is obtained. The retake policy in case of courses with "F" grades applies to all students of EUB irrespective of their date of enrollment. A student who wishes to retake a course must register for the course again and will be assessed for tuition and applicable fees.`}
        /> */}
        <SectionContent
          title={`Abandoning Course`}
          content={`Grade F will be recorded for students who have not fulfilled academic obligations and have not obtained a grade, and for students who abandon their courses without officially withdrawing from a course.`}
        />
      </div>
    </div>
  );
};

export default Content;
