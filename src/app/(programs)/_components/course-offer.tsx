'use client';

import React from 'react';

import { columns, useGetCourseOffer } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from './content-wrapper';

const CourseOffer: React.FC<{
  department: string;
  type: 'regular' | 'evening';
}> = ({ department, type }) => {
  const { data, isLoading } = useGetCourseOffer(department, type);

  return (
    <ContentWrapper title='Course Offer'>
      <SystemTable isLoading={isLoading} data={data!} columns={columns} />
    </ContentWrapper>
  );
};

export default CourseOffer;
