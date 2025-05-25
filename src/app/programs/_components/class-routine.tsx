import React from 'react';
import SystemTable from '@/components/table/system-table';
import { columns, useGetRegularClassRoutine } from '@/hooks/use-get-course';
import ContentWrapper from './content-wrapper';
import Loader from '@/components/loader';

const ClassRoutine: React.FC<{ department: string }> = ({ department }) => {
  const { data, isLoading } = useGetRegularClassRoutine(department);

  return (
    <ContentWrapper title='Class Routine'>
      {isLoading ? (
        <Loader className='h-[200px]' />
      ) : !data || data.length === 0 ? (
        <div className='text-center text-gray-500'>No class routine found.</div>
      ) : (
        data && (
          <SystemTable caption='Class Routine' data={data!} columns={columns} />
        )
      )}
    </ContentWrapper>
  );
};

export default ClassRoutine;
