import React from 'react';

import { Program } from '@/types/enum';

import AboutUs from '@/app/(programs)/_components/about-us';

// export const metadata = generateMetaData({
// });

const Page = () => {
  return <AboutUs department={Program['BA-ENGLISH']} />;
};

export default Page;
