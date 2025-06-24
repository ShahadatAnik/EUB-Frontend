import React from 'react';

import SectionContent from './section-content';
import SectionLayout from './section-layout';

const MinimumRequirement = () => {
  return (
    <SectionLayout id='minimum-requirement' title='Minimum Requirement'>
      <SectionContent title='Academic Qualifications'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>
            Combined GPA of 6.0 in both SSC and HSC with a minimum GPA of 2.5 in
            each OR GPA of at least 2.00 either in the SSC or HSC examination,
            but the total GPA in both the examination must be at least 6.00
          </li>
          <li>
            O-Levels and A-Levels: A minimum of five O-Level subjects with an
            Average Grade Point of at least 2.5 and two A-Level subjects with an
            Average Grade Point of at least 2.0. A maximum of one ‘E’ grade is
            allowed across both O-Levels and A-Levels combined. (Grading scale:
            A = 5, B = 4, C = 3, D = 2, E = 1) OR
          </li>
          <li>
            US High School Diploma, IB Diploma Program (IB-DP) or equivalent.
          </li>
          <li>
            Students with academic qualifications other than the above need to
            contact the Admissions Office to check their eligibility.
          </li>
          <li>
            Foreign Applicants: candidates must meet academic qualifications
            equivalent to Bangladeshi students. Foreign candidates without
            security clearance from their respective Embassy or High Commission
            in Bangladesh are not eligible to apply.
          </li>

          <li>
            Credit transfer is allowed between EUB and other institutions if
            course equivalencies are met.
          </li>
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
