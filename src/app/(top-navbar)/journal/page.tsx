import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  // A specific and academic title
  title: 'Journal of European University of Bangladesh (EUB)',

  // A detailed description for researchers and academics
  description:
    'Official peer-reviewed, open-access journal of EUB. The MJEUB publishes original research articles, review papers, and case studies across arts, social science, business, science, and engineering.',

  // A targeted list of keywords for academic search
  keywords: [
    'EUB',
    'Multidisciplinary Journal of European University of Bangladesh',
    'EUB Journal',
    'Academic journal Bangladesh',
    'Peer-reviewed journal',
    'Open access journal',
    'Scholarly publishing',
    'Engineering research journal',
    'Business research Bangladesh',
    'Social science journal Dhaka',
    'University research publication',
    'Interdisciplinary research',
  ],

  pageUrl: 'https://eub.edu.bd/journal',
});

const Page = () => {
  return (
    <>
      <PageHeader title='Journal' />

      <PageContainer>
        <Content />
      </PageContainer>
    </>
  );
};

export default Page;
