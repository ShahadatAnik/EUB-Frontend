import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import Notices from '@/app/(programs)/_components/notices';

// export const metadata = generateMetaData({});

const Page = () => {
  return <Notices department={Program['BSC-IP']} />;
};

export default Page;
