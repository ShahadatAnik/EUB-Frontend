import React from 'react';
import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';
import PageLayout from '@/app/programs-2/_components/page-layout';

import { pages } from './_config/page-data';

const ProgramLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <PageHeader image='/images/cse-2.jpg' title='Demo Program' />
      <PageContainer>
        <PageLayout
          pages={pages}
          bannerImage={{ src: '/images/cse-2.jpg', alt: '' }}
        >
          {children}
        </PageLayout>
      </PageContainer>
    </div>
  );
};

export default ProgramLayout;
