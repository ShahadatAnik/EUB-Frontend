import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import ClassRoutine from '@/app/(programs)/_components/class-routine';

// export const metadata = generateMetaData({});

const Page = () => {
  return <ClassRoutine department={Program['BSC-CSE']} type='evening' />;
};

export default Page;
