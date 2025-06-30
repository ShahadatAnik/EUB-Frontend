import React from 'react';

// import { IAlumni } from '@/types';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import UnderDevelopment from '@/app/(programs)/_components/under-development';

// import { generateMetaData } from '@/lib/utils';

// export const metadata = generateMetaData({

// });
const Page = () => {
  return (
    <ContentWrapper title='Alumni and Industry'>
      <UnderDevelopment />
    </ContentWrapper>
  );
};

export default Page;
