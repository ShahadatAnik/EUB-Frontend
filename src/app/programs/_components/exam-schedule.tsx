import React from 'react';

import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';

import Loader from '@/components/loader';
import SystemTable from '@/components/table/system-table';

import ContentWrapper from './content-wrapper';

const ExamSchedule: React.FC<{ department: string }> = ({ department }) => {
  const { data, isLoading } = useGetRegularExamSchedule(department);

  return (
    <ContentWrapper title='Exam Schedule'>
      {isLoading ? (
        <Loader className='h-[200px]' />
      ) : !data || data.length === 0 ? (
        <div className='text-center text-gray-500'>No exam schedule found.</div>
      ) : (
        data && (
          <SystemTable caption='Exam Schedule' data={data!} columns={columns} />
        )
      )}
    </ContentWrapper>
  );
};

export default ExamSchedule;
