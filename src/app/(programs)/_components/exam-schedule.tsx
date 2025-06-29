'use client';

import React from 'react';

import { columns, useExamSchedule } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from './content-wrapper';

const ExamSchedule: React.FC<{
  department: string;
  type: 'regular' | 'evening';
}> = ({ department, type }) => {
  const { data, isLoading } = useExamSchedule(department, type);
  return (
    <ContentWrapper title='Exam Schedule'>
      <SystemTable isLoading={isLoading} data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
