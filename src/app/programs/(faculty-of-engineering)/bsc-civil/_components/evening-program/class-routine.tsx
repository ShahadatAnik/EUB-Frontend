import React from 'react';

import { columns, useGetEveningClassRoutine } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from '../content-wrapper';

const ClassRoutine = () => {
  const { data } = useGetEveningClassRoutine('BSC-CIVIL');
  return (
    <ContentWrapper title='Class Routine'>
      <SystemTable caption='Class Routine' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
