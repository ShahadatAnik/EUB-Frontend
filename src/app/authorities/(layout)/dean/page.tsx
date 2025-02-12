import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';
import { getAuthoritiesDean } from '@/server/get';
export const metadata = generateMetaData({
  title: 'Dean',
  description: 'The dean of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesDean();

  return <Content data={data} />;
};

export default Page;
