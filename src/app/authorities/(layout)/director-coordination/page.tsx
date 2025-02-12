import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';
import { getAuthoritiesDirectorCoordination } from '@/server/get';
export const metadata = generateMetaData({
  title: 'Director Coordination',
  description:
    'The director coordination of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesDirectorCoordination();
  return <Content data={data} />;
};

export default Page;
