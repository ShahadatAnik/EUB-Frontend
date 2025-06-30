import React from 'react';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import PageLayout from '@/app/(programs)/_components/page-layout';

import { pages } from './_config/page-data';

const ProgramLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <PageHeader
        image='/images/cse-2.jpg'
        title='Bachelor Of Business Administration (BBA)'
      />
      <PageContainer>
        <PageLayout
          pages={pages}
          bannerImage={{
            src: '/banner.jpg',
            alt: 'Bachelor Of Business Administration (BBA)',
          }}
        >
          {children}
        </PageLayout>
      </PageContainer>
    </div>
  );
};

export default ProgramLayout;
