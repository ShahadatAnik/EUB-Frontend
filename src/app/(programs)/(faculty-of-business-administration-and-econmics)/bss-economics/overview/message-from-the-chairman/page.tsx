import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import MessageFromChairman from '@/app/(programs)/_components/message-from-chairman';

// export const metadata = generateMetaData({});

const Page = () => {
  return <MessageFromChairman departmentName={Program['BSS-ECONOMICS']} />;
};

export default Page;
