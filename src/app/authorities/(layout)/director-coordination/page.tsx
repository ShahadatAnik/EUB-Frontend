import React from 'react';
import Content from './_components/content';

import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'Director Coordination',
  description:
    'The director coordination of the European University of Bangladesh',
});

const Page = () => {
  return <Content />;
};

export default Page;
