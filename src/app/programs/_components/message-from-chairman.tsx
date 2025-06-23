'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { useGetDepartmentTeachers } from '@/hooks/use-get-course';

import Loader from '@/components/loader';

import ContentWrapper from './content-wrapper';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const getDepartmentName = (department: string) => {
  switch (department) {
    case 'MBA 1 Year':
    case 'EMBA':
    case 'BBA':
      return 'Department of Business Administration';
    case 'Civil':
      return 'Department of Civil Engineering';
    default:
      return department;
  }
};

const MessageFromChairman: React.FC<{
  departmentName: string;
}> = ({ departmentName }) => {
  const { data, isLoading } = useGetDepartmentTeachers(departmentName);
  const chairman = data?.find((teacher) => teacher.department_head === true);

  if (isLoading) return <Loader className='h-[200px]' />;

  if (!chairman) return <>No Chairman Found</>;

  return (
    <ContentWrapper title='Message from the Chairman' className='py-4'>
      <div className='mb-4 flex justify-center'>
        <Image
          src={
            chairman.teacher_image
              ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + chairman.teacher_image
              : '/person-placeholder.jpg'
          }
          alt={chairman.teacher_name}
          width={200}
          height={200}
        />
      </div>

      {chairman.department_head_message && (
        <RichTextViewer content={chairman.department_head_message} />
      )}

      <br />

      {chairman && chairman.teacher_name && (
        <p>
          <strong>Warm Regards,</strong>
          <br />
          {chairman?.teacher_name}
          <br />
          {chairman?.teacher_designation}
          {', '}
          {getDepartmentName(chairman.department_name)}
          <br />
          European University of Bangladesh
        </p>
      )}
    </ContentWrapper>
  );
};

export default MessageFromChairman;
