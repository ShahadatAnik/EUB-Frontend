'use client';

import React from 'react';

import { columns, useClassRoutine } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from './content-wrapper';

const ClassRoutine: React.FC<{
  department: string;
  type: 'regular' | 'evening';
}> = ({ department, type }) => {
  const { data, isLoading } = useClassRoutine(department, type);
  return (
    <ContentWrapper title='Class Routine'>
      <SystemTable isLoading={isLoading} data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
