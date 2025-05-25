'use client';

import React from 'react';
import SystemTable from '@/components/table/system-table';
import ContentWrapper from '../content-wrapper';
import { columns, useGetRegularClassRoutine } from '@/hooks/use-get-course';
import Loader from '@/components/loader';

const ClassRoutine = () => {
  const { data, isLoading } = useGetRegularClassRoutine('BSC-EEE');

  if (isLoading) {
    return <Loader className='h-[200px]' />;
  }

  return (
    <ContentWrapper title='Class Routine'>
      <SystemTable caption='Class Routine' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
