import React from 'react';
import SystemTable from '@/components/table/system-table';
import ContentWrapper from '../content-wrapper';
import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';
import Loader from '@/components/loader';

const ExamSchedule = () => {
  const { data, isLoading } = useGetRegularExamSchedule('BSC-EEE');

  if (isLoading) {
    return <Loader className='h-[200px]' />;
  }

  return (
    <ContentWrapper title='Exam Schedule'>
      <SystemTable caption='Exam Schedule' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
