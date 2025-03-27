import React from 'react';
import Link from 'next/link';

import ContentWrapper from './content-wrapper';
import { Separator } from '@/components/ui/separator';

const StudentServiceDesk = () => {
  return (
    <ContentWrapper title='Student Service Desk' className='pt-2 space-y-6'>
      <Link
        className='underline text-primary font-medium flex items-center'
        href={'/student-service-desk'}
      >
        Go to Student Service Desk
      </Link>
      <div>
        <h4 className='text-lg font-medium'>Additional Information :</h4>
        <Separator className='mt-1 mb-2' />
        <div className='space-y-4'>
          <div>
            <h6 className='text-lg font-medium'>Academic</h6>
            <ul className='mt-1 list-disc pl-6 space-y-2'>
              <li>
                Discussion and consultation about course curriculum and course
                mapping.
              </li>
              <li>Discussion regarding trimester-based course breakdown.</li>
              <li>Guidance of course path.</li>
              <li>Probation information and guidelines.</li>
            </ul>
          </div>
          <div>
            <h6 className='text-lg font-medium'>Administrative</h6>
            <ul className='mt-1 list-disc pl-6 space-y-2'>
              <li>All program-related queries.</li>
              <li>Information on faculty members.</li>
              <li>Trimester drop (medical or other compelling reasons).</li>
              <li>Course exclusion and inclusion.</li>
              <li>Queries related to degree analysis.</li>
              <li>Credit transfer.</li>
              <li>Department change.</li>
              <li>Course advising.</li>
            </ul>
          </div>
          <div>
            <h6 className='text-lg font-medium'>Others</h6>
            <ul className='mt-1 list-disc pl-6 space-y-2'>
              <li>Appointment with parents/guardians and follow-up.</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default StudentServiceDesk;
