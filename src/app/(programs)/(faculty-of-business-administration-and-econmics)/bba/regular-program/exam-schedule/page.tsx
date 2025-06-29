import React from 'react';

import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

const Page = () => {
  const { data } = useGetRegularExamSchedule('BBA');

  return (
    <ContentWrapper title='Exam Schedule'>
      <SystemTable caption='Exam Schedule' data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default Page;
