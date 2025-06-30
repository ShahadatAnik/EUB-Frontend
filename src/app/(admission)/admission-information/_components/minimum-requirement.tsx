import React from 'react';

import SectionContent from './section-content';
import SectionLayout from './section-layout';

const MinimumRequirement = () => {
  return (
    <SectionLayout id='minimum-requirement' title='Minimum Requirement'>
      <SectionContent title='Academic Qualifications'>
        <ul className='list-inside list-decimal space-y-3'>
          <span className='italic'>
            The admission eligibility for undergraduate, graduate and Diploma
            level at private Universities approved by UGC is determined as
            follows:
          </span>
          <br />
          <li>
            Private Universities shall not advertise admission or admission to
            any program or course other than the program or course approved by
            the University Grants Commission.
          </li>
          <li>
            A candidate must have a minimum GPA 2.50 or equivalent grade in each
            SSC or equivalent examination and HSC examinations or equivalent
            examination. If there is a minimum GPA 2.00 in any of these two
            examinations, the candidate must have a total GPA 6.00 in both
            examinations.
          </li>
          <li>
            The candidate must have minimum 5 Subjects in O-Level and 2 subjects
            in A-Level examinations with minimum grade of B (GPA 4.00 ) in 4
            subjects and of C (GPA 3.50) in 3 subjects of 7 subjects in both the
            examinations.
          </li>
          <li>
            Offspring of the freedom fighters may apply with an aggregate GPA of
            5.00 in SSC/SSC(Vocational)/Dakhil and HSC/Alim or equivalent.
          </li>
          <li>
            For the programs or courses titled Music, Fashion Design, Fine Arts,
            Graphics Design, Library Science & Information Technology, the
            candidate should have a minimum of GPA 2.00 in SSC/O-Level and HSC/A
            or equivalent public examinations at each level.
          </li>
          <li>
            Students with a science background in SSC/SSC(Vocational)/Dakhil,
            HSC/Alim or equivalent examinations are only allowed to get
            admission in the programs/courses at the Bachelor’s (BSc), Master’s
            (MSc) and Diploma level under the Faculty of Science and Technology.
            Students who passed from Arts, Humanities and Business background
            are not allowed to get admission in B.Sc., MSc and Diploma programs.
          </li>
          <li>
            Students having a GED Diploma degree will not be eligible for
            admission to the Private Universities.
          </li>
          <li>
            Students seeking admission to the Masters programs must have a GPA
            2.00 or equivalent at Bachelor program having the above mentioned
            educational qualifications.
          </li>
          <br />
          <span className='italic'>
            It is, therefore, directed to admit the students in the approved
            programs/courses of the commission at the private universities
            subject to the educational qualifications mentioned above. At the
            same time, the commissions office circular regarding the admission
            policy of the students issued on 10 April 2016 (Office Memo no.3010)
            has been cancelled.
          </span>
          <br />
          <br />
          The Admission Committee looks for individuals who want to learn in any
          suitable course(s). Students who want to learn are encouraged to
          enroll.
        </ul>
      </SectionContent>

      <SectionContent title='Specific programs requirements'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>
            For <strong>B.A. (Honors) in English Program</strong>, minimum 2nd
            division or CGPA of 2.5 in SSC/Dakhil and HSC/Alim, O-Level: CGPA of
            2.00 in five subjects; A-Level: CGPA of 2.0 in two subjects, minimum
            45% marks in English at the SSC/HSC level. Students with a gap in
            studies or post-school qualifications (Diplomas, Advanced Diplomas)
            may receive credit recognition.
          </li>
          <li>
            For all <strong>Engineering Programs</strong> of the School of
            Engineering & Physical Sciences, candidates
            <ul className='mt-1 list-inside list-disc pl-8'>
              <li>
                Must pass SSC and HSC in Science with at least a 2nd division in
                both, OR
              </li>
              <li>
                Math & Physics with a minimum C and E grade respectively in
                A-Levels, OR
              </li>
              <li>
                Math and Physics with a minimum C grade in O-Levels AND must
                have Math or Physics with a minimum C grade in A-Levels to be
                eligible to apply.
              </li>
            </ul>
          </li>
        </ul>
      </SectionContent>

      <SectionContent title='Postgraduate Program Requirements'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>
            <strong>MBA Program</strong>
            <ul className='mt-1 list-inside list-disc pl-8'>
              <li>
                A bachelor’s degree from a recognized university is required.
              </li>
              <li>Must have TOEFL (550) & GMAT (500) scores.</li>
              <li>
                For the <strong>EMBA Program</strong>, work experience in an
                executive position is preferred.
              </li>
            </ul>
          </li>
          <li>
            <strong> M.A. in English</strong>
            <ul className='mt-1 list-inside list-disc pl-8'>
              <li>
                B.A. (Honors) in English or completion of M.A. (Preliminary) in
                English required.
              </li>
            </ul>
          </li>
          <li>
            <strong>Master of Laws (LL.M.)</strong>
            <ul className='mt-1 list-inside list-disc pl-8'>
              <li>
                LL.B. (Honors) degree or completion of LL.M. (Preliminary)
                required.
              </li>
              <li>
                LL.M. (Preliminary): requires LL.B. Pass (Two-Year Bachelor of
                Laws).
              </li>
              <li>
                LL.M. (Final): requires LL.B. (Honors) or LL.M. (Preliminary).
              </li>
            </ul>
          </li>
        </ul>
      </SectionContent>

      <SectionContent
        title='Please Read Carefully'
        titleClassName='bg-destructive/10 border-destructive text-destructive'
      >
        <p>
          Please check the eligibility criteria before applying. Applicants not
          meet the eligibility criteria may be refused admission and payments
          made for the same will not be refunded.
        </p>
      </SectionContent>
    </SectionLayout>
  );
};

export default MinimumRequirement;
