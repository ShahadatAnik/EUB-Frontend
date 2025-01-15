'use client';

import CourseWaiver from './course-waiver';
import MinimumRequirement from './minimum-requirement';
import OnlineAdmissionProcess from './online-admission-process';
import PaymentProcess from './payment-process';
import Sidebar from './sidebar';

const Content = () => {
  return (
    <div className='flex gap-8'>
      <div className='w-[240px]'>
        <Sidebar />
      </div>
      <div
        className='flex-1 space-y-8
      '
      >
        <MinimumRequirement />
        <OnlineAdmissionProcess />
        <PaymentProcess />
        <CourseWaiver />
      </div>
    </div>
  );
};

export default Content;
