import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import MessageFromChairman from '@/app/(programs)/_components/message-from-chairman';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/overview/message-from-the-chairman',
  title: 'Welcome from the CE Chairman | European University of Bangladesh',
  description:
    "Read a welcome message from the Chairman of EUB's Civil Engineering Dept. Learn about our vision for world-class education and industry collaboration.",
  keywords: [
    "Chairman's message Civil Engineering",
    'EUB Civil Engineering Department',
    'Head of Department CE',
    'Md. Abul Kalam Azad EUB',
    'Engineering education vision',
    'Academic excellence in engineering',
    'Industry collaboration EUB',
    'B.Sc. in Civil Engineering welcome',
  ],
});

const Page = () => {
  return <MessageFromChairman departmentName={Program['BSC-CIVIL']} />;
};

export default Page;
