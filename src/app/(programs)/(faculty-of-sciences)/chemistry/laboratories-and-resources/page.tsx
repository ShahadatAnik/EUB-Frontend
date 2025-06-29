import React from 'react';

import LaboratoriesAndResources from '@/app/(programs)/_components/laboratories-and-resources';

import { labData } from './_config/lab-data';

// export const metadata = generateMetaData({});

const Page = () => {
  return <LaboratoriesAndResources data={labData} />;
};

export default Page;
