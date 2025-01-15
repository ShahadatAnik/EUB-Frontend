import React from 'react';
import SectionLayout from './section-layout';
import SectionContent from './section-content';

const MinimumRequirement = () => {
  return (
    <SectionLayout id='minimum-requirement' title='Minimum Requirement'>
      <SectionContent title='Academic Qualifications'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            Combined GPA of 8.0 in both SSC and HSC with a minimum GPA of 3.5 in
            each or
          </li>
          <li>
            <span className='font-semibold'>GCE O-Levels and A-Levels:</span>{' '}
            O-Levels in five subjects with a minimum Average Grade Point of 2.5
            and A-Levels in two subjects with a minimum Average Grade Point of
            2.0. Only one ‘E’ Grade is acceptable in combined O & A-Levels.
            (Scale A=5, B=4, C=3, D=2 & E=1) or
          </li>
          <li>
            US High School Diploma, IB Diploma Program (IB-DP) or equivalent.
          </li>
          <li>
            Students with academic qualifications other than the above need to
            contact Admissions Office to check their eligibility.
          </li>
          <li>
            <span className='font-semibold'>Foreign Applicants:</span>{' '}
            candidates must have a minimum avg 60% marks in Grades 10th and
            12th.
          </li>
        </ul>
      </SectionContent>

      <SectionContent title='Specific programs requirements'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            For all Engineering programs (BS in CSE, EEE, and CEE) of the School
            of Engineering & Physical Sciences, candidates must have -
            <ul className='list-disc list-inside pl-8'>
              <li>Math and Physics with a minimum B grade in HSC OR</li>
              <li>
                Math & Physics with a minimum C & E grade respectively in
                A-Levels OR
              </li>
              <li>
                Math and Physics with a minimum C grade in O-Levels AND must
                have Math or Physics with a minimum C grade in A-Levels to be
                eligible to apply.
              </li>
            </ul>
          </li>
          <li>
            For{' '}
            <span className='font-semibold'>
              B.Arch. (Bachelor of Architecture)
            </span>{' '}
            program, candidates must have Math or Physics with a minimum
            &apos;B&apos; grade in HSC or a &apos;C&apos; grade in A-Levels to
            be eligible to apply.
          </li>
          <li>
            For{' '}
            <span className='font-semibold'>Biochemistry and Microbiology</span>
            , candidates must have Biology and Chemistry in SSC/HSC or O/A
            Levels to be eligible to apply.
          </li>
          <li>
            For <span className='font-semibold'>BPharm</span>, applicants must
            have -
            <ul className='list-disc list-inside pl-8'>
              <li>
                Physics, Chemistry, and Biology with a minimum ‘A’ grade in
                SSC/Equivalent and HSC/Equivalent separately to be eligible to
                apply.
              </li>
              <li>
                Physics, Chemistry, and Biology with a minimum ‘B’ grade in
                A-Levels to be eligible to apply.
              </li>
            </ul>
            <small className='mt-2 text-destructive font-medium'>
              Note: Candidate must pass HSC/A-Levels in the current year or the
              previous year for BPharm Program. .
            </small>
          </li>
        </ul>
      </SectionContent>

      <SectionContent
        title='Please Read Carefully'
        titleClassName='bg-destructive/10 border-destructive text-destructive'
      >
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            Please check the eligibility criteria before applying. Applicants
            not meet the eligibility criteria may be refused admission and
            payments made for the same will not be refunded
          </li>
          <li>
            Candidates whose first choice is LLB or BPharm will be given first
            preference
          </li>
        </ul>
      </SectionContent>
    </SectionLayout>
  );
};

export default MinimumRequirement;
