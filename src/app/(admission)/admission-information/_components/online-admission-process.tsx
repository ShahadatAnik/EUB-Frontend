import React from 'react';
import SectionContent from './section-content';
import SectionLayout from './section-layout';
import Link from 'next/link';

const OnlineAdmissionProcess = () => {
  return (
    <SectionLayout
      title='Online Admission Process'
      id='online-admission-process'
    >
      <SectionContent title='Step 1 - Complete your Registration'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            Read carefully your eligibility from the tab{' '}
            <Link
              className='text-primary underline'
              href='#minimum-requirement'
            >
              Minimum Requirement
            </Link>
            .
          </li>
          <li>
            Complete your registration with a valid email and phone number.
          </li>
          <li>Verify your email and then log in again.</li>
        </ul>
      </SectionContent>

      <SectionContent title='Step 2 - Complete your application form'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>After registration, you will get an Application form.</li>
          <li>Complete your application form with valid information.</li>
          <li>
            You may check your application form carefully before the final
            Submission
          </li>
          <li>
            Once it is submitted you are not able to edit your application form.
          </li>
        </ul>
      </SectionContent>

      <SectionContent title='Step 3 - Payment options for application Fee'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>Payment with Bkash: 1523/-</li>
          <li>Payment with Bank: 1500/-</li>
          <li>
            For details go to the{' '}
            <Link className='text-primary underline' href='#payment-process'>
              Payment Process
            </Link>{' '}
            tab
          </li>
        </ul>
      </SectionContent>

      <SectionContent title='Step 4 - Print your admit card'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>Print your admit card to sit for the exam.</li>
        </ul>
      </SectionContent>
    </SectionLayout>
  );
};

export default OnlineAdmissionProcess;
