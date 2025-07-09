import React from 'react';

import { IAuthorityInfo } from '@/types/authorities';

import AuthoritiesInfoCard from '@/app/authorities/_components/authorities-info-card';

const Content: React.FC<{ data: IAuthorityInfo }> = ({ data }) => {
  if (!data) return <div>No data</div>;

  return <AuthoritiesInfoCard data={data} />;
};

export default Content;
