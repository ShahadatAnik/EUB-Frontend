import React from 'react';

import { getAuthoritiesProVC } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Pro Vice Chancellor',
  description:
    'The pro vice chancellor of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesProVC();
  return <Content data={data} />;
};

export default Page;
