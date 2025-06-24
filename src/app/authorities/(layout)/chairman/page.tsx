import React from 'react';

import { getAuthoritiesChairman } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Chairman',
  description: 'The chairman of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesChairman();
  return <Content data={data} />;
};

export default Page;
