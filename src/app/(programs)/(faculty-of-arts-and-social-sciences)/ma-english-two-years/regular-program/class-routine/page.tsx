import React from 'react';

import { Program } from '@/types/enum';

import ClassRoutine from '@/app/(programs)/_components/class-routine';

// export const metadata = generateMetaData({

//   });
const Page = () => {
  return (
    <ClassRoutine department={Program['MA-ENGLISH-TWO-YEAR']} type='regular' />
  );
};

export default Page;
