import React from 'react';

import { getAuthoritiesAcademicCouncil } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  title: 'Academic Council',
  description: 'The academic council of the European University of Bangladesh',
});

const Page = async () => {
  const data = await getAuthoritiesAcademicCouncil();

  return <Content data={data} />;
};

export default Page;
