import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesSyndicate } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesSyndicate();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/syndicate',
    title:
      'EUB Syndicate Members | University Governance | European University',
    description:
      "Meet the members of the Syndicate at the European University of Bangladesh, a key executive body responsible for the university's administrative affairs.",
    keywords: [
      'EUB Syndicate',
      'University Syndicate Bangladesh',
      'EUB governance body',
      'University executive council',
      'EUB administration',
      data?.chairperson?.name,
      'University authorities',
      'List of Syndicate members',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesSyndicate();

  return <Content data={data} />;
};

export default Page;
