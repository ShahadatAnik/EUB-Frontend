import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import AboutUs from '@/app/(programs)/_components/about-us';

export const metadata = generateMetaData({
  pageUrl: '/bsc-civil/overview/about-us',
  title:
    'About B.Sc. in Civil Engineering at European University of Bangladesh',
  description:
    "Learn about the B.Sc. in Civil Engineering program at EUB. We produce quality engineers to meet Bangladesh's growing infrastructure needs through modern education.",
  keywords: [
    'B.Sc. in Civil Engineering Bangladesh',
    'EUB Civil Engineering',
    'Civil Engineering program Dhaka',
    'Undergraduate Civil Engineering',
    'CE program at EUB',
    'Infrastructure development Bangladesh',
    'Construction management degree',
    'Best private university for Civil Engineering',
    'UGC approved CE program',
  ],
});

const Page = () => {
  return <AboutUs department={Program['BSC-CIVIL']} />;
};

export default Page;
