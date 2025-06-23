import React from 'react';

import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';

import Loader from '@/components/loader';
import SystemTable from '@/components/table/system-table';

import ContentWrapper from '../content-wrapper';

const ExamSchedule = () => {
  const { data, isLoading } = useGetRegularExamSchedule('BSC-CSE');

  if (isLoading) {
    return <Loader className='h-[200px]' />;
  }

  if (!data || data.length === 0) {
    return (
      <ContentWrapper title='Class Routine'>
        <div className='text-center text-gray-500'>
          No exam schedule available.
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper title='Exam Schedule'>
      <SystemTable caption='Exam Schedule' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
