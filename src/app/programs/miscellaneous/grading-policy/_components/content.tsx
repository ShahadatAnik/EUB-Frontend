import React from 'react';

import GradingTable from './grading-table';
import SectionContent from './section-content';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <SectionContent
          title='Grades'
          content='Letter grades indicating the quality of course work completed is interpreted as follows'
        />
        <GradingTable />

        <SectionContent
          title={`Grade Point Average (GPA)`}
          content="Student's grade-point averages are numerical values obtained by
            dividing the total grade points earned by the credits attempted.
            Only courses' graded A, A-, B+, B, B-, C+, C, C-, D+, D, and F
            are used to determine credits attempted. Only the grades earned in
            the courses that are required for a degree are included in the GPA
            calculation. Grades earned in other courses are reported on the
            transcript but are not counted in calculating the GPA."
        />
        <SectionContent
          title={`GPA - Class Equivalence`}
          content={
            <p>
              NSU students are graded on GPA. Comparison of the GPA earned by
              NSU students to the Classes earned by students in other
              universities in the country is as follows:
              <br />
              GPA 3.00 and above = First Class
              <br />
              GPA 2.50 to 2.99 = Second Class
              <br />
              GPA 2.00 to 2.49 = Third Class
            </p>
          }
        />
        <SectionContent
          title={`Grade Change`}
          content='Grade change is strongly discouraged. Letter grades may be changed only for posting errors or errors in calculation. If a grade change is inevitable, it must be completed within one semester following the submission of the grade. The program directors and department chairs will ask for necessary papers and records to substantiate the grade change.'
        />
        <SectionContent
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
        />
        <SectionContent
          title={`Withdrawal (W)`}
          content={`The grade Withdrawal (W) is assigned when a student officially drops a course during the period between the ends of the third and twelfth weeks. Prior to that time if a student drops a course, no entry is made on the academic record. A "W" does not affect the student's GPA.`}
        />
        <SectionContent
          title={`Retaking Courses`}
          content={`A student may repeat a course in which the grade is 'B' or lower. When a student retakes a course, the actual grade will be recorded. In case of a retake course, only the best grade will be used to calculate the CGPA. An "F" grade earned in any credit course will be used to calculate CGPA until the course is retaken/ replaced by taking another appropriate course, and a better grade is obtained. The retake policy in case of courses with "F" grades applies to all students of NSU irrespective of their date of enrollment. A student who wishes to retake a course must register for the course again and will be assessed for tuition and applicable fees.`}
        />
        <SectionContent
          title={`Abandoning Course`}
          content={`Grade F will be recorded for students who have not fulfilled academic obligations and have not obtained a grade, and for students who abandon their courses without officially withdrawing from a course.`}
        />
      </div>
    </div>
  );
};

export default Content;
