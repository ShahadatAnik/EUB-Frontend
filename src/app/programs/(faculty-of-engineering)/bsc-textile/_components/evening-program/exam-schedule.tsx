import React from 'react';
import SystemTable from '@/components/table/system-table';
import ContentWrapper from '../content-wrapper';
import { columns, useGetEveningExamSchedule } from '@/hooks/use-get-course';

const ExamSchedule = () => {
  const { data } = useGetEveningExamSchedule('BSC-TEXTILE');
  return (
    <ContentWrapper title='Exam Schedule'>
      <SystemTable caption='Exam Schedule' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
