import React from 'react';

import { Metadata } from 'next';

import { getAuthoritiesRegistrar } from '@/server/get';

import { generateMetaData as generatePageMetaData } from '@/lib/utils';

import Content from './_components/content';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAuthoritiesRegistrar();

  const metadata = generatePageMetaData({
    pageUrl: '/authorities/registrar',
    title: `Registrar ${data.personal_info.name} | European University of Bangladesh`,
    description: `Official profile of ${data.personal_info.name}, the Registrar of the European University of Bangladesh, managing academic records, registration, and student affairs.`,
    keywords: [
      'EUB Registrar',
      data.personal_info.name,
      'University Registrar Bangladesh',
      'EUB student records',
      'University administration',
      'Academic affairs EUB',
      'EUB authorities',
      'Registrar profile',
    ],
  });

  return metadata;
}

const Page = async () => {
  const data = await getAuthoritiesRegistrar();
  return <Content data={data} />;
};

export default Page;
