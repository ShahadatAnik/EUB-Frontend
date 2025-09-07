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
        className='object-contain'
        title='Bachelor of Social Sciences (BSS) in Economics'
      />
      <PageContainer>
        <PageLayout
          pages={pages}
          bannerImage={{
            // src: '/banner.jpg',
            src: '/images/programs/bss-eco/banner.jpg',
            alt: 'Bachelor of Social Sciences (BSS) in Economics',
          }}
        >
          {children}
        </PageLayout>
      </PageContainer>
    </div>
  );
};

export default ProgramLayout;
