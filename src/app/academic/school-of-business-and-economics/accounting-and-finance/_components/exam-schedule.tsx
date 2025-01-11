import Link from 'next/link';
import React from 'react';

const ExamSchedule = () => {
  return (
    <div>
      <Link
        className='underline text-primary'
        target='_blank'
        href={'/pdf/test.pdf'}
      >
        Download Exam Schedule
      </Link>
    </div>
  );
};

export default ExamSchedule;
