import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

// export const metadata = generateMetaData({});

const Page = () => {
  return <ExamSchedule department='BSC-EEE' type='regular' />;
};

export default Page;
