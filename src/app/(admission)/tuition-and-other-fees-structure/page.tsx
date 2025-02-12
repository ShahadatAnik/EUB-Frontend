import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

import {
  getUndergraduateTuitionFees,
  getGraduateTuitionFees,
  getCertificateTuitionFees,
} from '@/server/get';

export default async function Page() {
  const [
    undergraduateTuitionFees,
    graduateTuitionFees,
    certificateTuitionFees,
  ] = await Promise.all([
    getUndergraduateTuitionFees(),
    getGraduateTuitionFees(),
    getCertificateTuitionFees(),
  ]);

  return (
    <>
      <PageHeader title='Tuition and Other Fees Structure' />
      <PageContainer>
        <Content
          initialData={{
            undergraduateTuitionFees,
            graduateTuitionFees,
            certificateTuitionFees,
          }}
        />
      </PageContainer>
    </>
  );
}
