import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import ExamSchedule from '@/app/(programs)/_components/exam-schedule';

// export const metadata = generateMetaData({});

const Page = () => {
  return <ExamSchedule department={Program['BSC-IP']} type='regular' />;
};

export default Page;
