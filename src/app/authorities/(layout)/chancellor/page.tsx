import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesChancellor } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesChancellor();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/chancellor',
    title: `Chancellor ${data.personal_info.name} | European University of Bangladesh`,
    description: `Official profile of ${data.personal_info.name}, Chancellor of the European University of Bangladesh and Hon'ble President of the People's Republic of Bangladesh.`,
    keywords: [
      'EUB Chancellor',
      data.personal_info.name,
      'President of Bangladesh university chancellor',
      'University authorities Bangladesh',
      'European University of Bangladesh leadership',
      'Chancellor profile',
      'EUB administration',
      'University governance',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesChancellor();

  return <Content data={data} />;
};

export default Page;
