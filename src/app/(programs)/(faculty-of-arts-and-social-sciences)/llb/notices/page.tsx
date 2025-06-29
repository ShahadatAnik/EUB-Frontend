import React from 'react';

import { generateMetaData } from '@/lib/utils';

import Notices from '@/app/(programs)/_components/notices';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/notices',
  title:
    'Civil Engineering Department Notices | European University of Bangladesh',
  description:
    'Find all official notices and announcements for the B.Sc. in Civil Engineering department at EUB, including exam schedules, thesis applications, and updates.',
  keywords: [
    'Civil Engineering notices',
    'EUB CE department notice',
    'BSc in Civil Engineering announcements',
    'Thesis application notice',
    'Exam schedule CE',
    'Academic notices EUB',
    'EUB student notice',
    'Notice board Civil Engineering',
  ],
});

const Page = () => {
  return <Notices department='LLB' />;
};

export default Page;
