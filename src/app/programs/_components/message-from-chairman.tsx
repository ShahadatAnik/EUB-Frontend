'use client';

import React from 'react';

import { useGetDepartmentTeachers } from '@/hooks/use-get-course';
import ContentWrapper from './content-wrapper';
import ClientImage from '@/components/client-image';

const MessageFromChairman: React.FC<{
  departmentName: string;
  children: React.ReactNode;
}> = ({ departmentName, children }) => {
  const { data, isLoading } = useGetDepartmentTeachers(departmentName);
  const chairman = data?.find((teacher) => teacher.department_head === true);

  if (isLoading) return <>loading...</>;

  return (
    <ContentWrapper title='Message from the Chairman' className='py-4'>
      <div className='flex justify-center mb-4'>
        <ClientImage
          src={chairman?.teacher_image || ''}
          alt={chairman?.teacher_name || ''}
          width={200}
          height={200}
        />
      </div>
      {children}
      <br />

      {chairman && chairman.teacher_name && (
        <p>
          <strong>Warm Regards,</strong>
          <br />
          {chairman?.teacher_name}
          <br />
          {chairman?.teacher_designation} of {chairman.department_name}
          <br />
          European University of Bangladesh
        </p>
      )}
    </ContentWrapper>
  );
};

export default MessageFromChairman;
