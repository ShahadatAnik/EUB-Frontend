import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import AboutUs from '@/app/(programs)/_components/about-us';

// export const metadata = generateMetaData({});

const Page = () => {
  return <AboutUs department={Program['BSC-EEE']} />;
};

export default Page;
