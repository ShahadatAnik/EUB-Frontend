import React from 'react';

import { getAuthoritiesSyndicate } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Syndicate',
  description: 'The syndicate of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesSyndicate();

  return <Content data={data} />;
};

export default Page;
