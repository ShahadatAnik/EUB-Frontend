import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import MessageFromChairman from '@/app/(programs)/_components/message-from-chairman';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <MessageFromChairman
      departmentName={Program['BSC-EEE']}
      // warmRegards={({ departmentName, teacherDesignation, teacherName }) => (
      //   <p>
      //     <strong>Warm Regards,</strong>
      //     <br />
      //     {teacherName}
      //     <br />
      //     {teacherDesignation}
      //     {', '}
      //     {departmentName}
      //     <br />
      //     European University of Bangladesh
      //   </p>
      // )}
    />
  );
};

export default Page;
