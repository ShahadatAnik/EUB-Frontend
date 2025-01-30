import React from 'react';

import { getInformationProvisionalCertificates } from '@/server/getInformationProvisionalCertificates';

import PageHeader from '@/components/page-header';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

export default async function Page() {
  const data = await getInformationProvisionalCertificates();
  return (
    <>
      <PageHeader title='Information about Provisional Certificates' />
      <PageContainer>
        <Content data={data} />
      </PageContainer>
    </>
  );
}
