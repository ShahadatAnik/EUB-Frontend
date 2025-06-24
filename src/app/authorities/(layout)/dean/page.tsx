import React from 'react';

import { getAuthoritiesDean } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Dean',
  description: 'The dean of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesDean();

  return <Content data={data} />;
};

export default Page;
