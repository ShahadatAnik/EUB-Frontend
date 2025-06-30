import React from 'react';

import { Program } from '@/types/enum';

import MessageFromChairman from '@/app/(programs)/_components/message-from-chairman';

// export const metadata = generateMetaData({
// });

const Page = () => {
  return (
    <MessageFromChairman departmentName={Program['MA-ENGLISH-TWO-YEAR']} />
  );
};

export default Page;
