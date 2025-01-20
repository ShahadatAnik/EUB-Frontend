'use client';

import SectionContent from '@/app/(admission)/admission-information/_components/section-content';
import ApplicationForm from './application-form';

const Content = () => {
  return (
    <div className='space-y-12'>
      <SectionContent title='Payment Process'>
        <ul className='space-y-2 list-inside list-disc'>
          <li>You have to send: Tk. 10,200.00 (For Admission Fee)</li>
          <li>
            Send the admission fee on this bKash Account number: 01628-747488
          </li>
        </ul>
      </SectionContent>
      <SectionContent title='Fill Up the Application Form'>
        <ApplicationForm />
      </SectionContent>
    </div>
  );
};

export default Content;
