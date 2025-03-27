import React from 'react';
import SystemTable from '@/components/table/system-table';
import ContentWrapper from '../content-wrapper';
import { columns, useGetEveningClassRoutine } from '@/hooks/use-get-course';

const ClassRoutine = () => {
  const { data } = useGetEveningClassRoutine('BSC-CSE');
  return (
    <ContentWrapper title='Class Routine'>
      <SystemTable caption='Class Routine' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
