import React from 'react';

import { getAuthoritiesRegistrar } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Register',
  description: 'The registrar of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesRegistrar();
  return <Content data={data} />;
};

export default Page;
