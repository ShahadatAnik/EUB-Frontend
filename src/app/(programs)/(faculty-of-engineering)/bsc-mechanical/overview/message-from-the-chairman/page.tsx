import React from 'react';

import { generateMetaData } from '@/lib/utils';

import MessageFromChairman from '@/app/(programs)/_components/message-from-chairman';

export const metadata = generateMetaData({
  pageUrl:
    'https://eub.edu.bd/bsc-mechanical/overview/message-from-the-chairman',
  title: 'Welcome from the ME Chairman | European University of Bangladesh',
  description:
    "Read a welcome message from the Chairman of EUB's Mechanical Engineering Dept. Learn about our vision for world-class education and industry collaboration.",
  keywords: [
    "Chairman's message Mechanical Engineering",
    'EUB Mechanical Engineering Department',
    'Head of Department ME',
    'Dr. Abu Taher EUB',
    'Engineering education vision',
    'Academic excellence in engineering',
    'Industry collaboration EUB',
    'B.Sc. in Mechanical Engineering welcome',
  ],
});

const Page = () => {
  return <MessageFromChairman departmentName='BSC-MECHANICAL' />;
};

export default Page;
