'use client';

import CourseWaiver from './course-waiver';
import MinimumRequirement from './minimum-requirement';
import OnlineAdmissionProcess from './online-admission-process';
import PaymentProcess from './payment-process';
import RequiredDocumentsForms from './required-documents-forms';
import Sidebar from './sidebar';

const Content = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      <Sidebar />
      <div className='flex-1 space-y-8'>
        <MinimumRequirement />
        <OnlineAdmissionProcess />
        <PaymentProcess />
        <CourseWaiver />
        <RequiredDocumentsForms />
      </div>
    </div>
  );
};

export default Content;
