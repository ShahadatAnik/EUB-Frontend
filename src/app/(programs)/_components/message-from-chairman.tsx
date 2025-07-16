'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { useGetDepartmentTeachers } from '@/hooks/use-get-course';

import NoDataFound from '@/components/no-data-found';
import { Skeleton } from '@/components/ui/skeleton';

import ContentWrapper from './content-wrapper';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const getDepartmentName = (
  department: string,
  full_department_name: string
) => {
  switch (department) {
    case 'mba':
    case 'mba-one-year':
    case 'bba':
    case 'emba':
    case 'mgds-one-year':
      return 'Department of Business Administration';
    case 'mss-economics':
    case 'bss-economics':
      return 'Department of Economics';
    case 'thm':
      return 'Department of Tourism and Hospitality Management';
    case 'bsc-civil':
      return 'Department of Civil Engineering';
    case 'bsc-mechanical':
      return 'Department of Mechanical Engineering';
    case 'bsc-cse':
      return 'Department of Computer Science and Engineering';
    case 'bsc-eee':
      return 'Dept. of Electrical and Electronic Engineering (EEE)';

    default:
      return full_department_name;
  }
};

const MessageFromChairman: React.FC<{
  departmentName: string;
}> = ({ departmentName }) => {
  const { data, isLoading } = useGetDepartmentTeachers(departmentName);

  const chairman = data?.find((teacher) => teacher.department_head === true);

  return (
    <ContentWrapper title='Message from the Chairman' className='py-4'>
      {isLoading && (
        <div className='space-y-4'>
          <Skeleton className='mx-auto size-40' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
        </div>
      )}
      {!isLoading && chairman && (
        <>
          <div className='mb-4 flex justify-center'>
            <Image
              src={
                chairman.teacher_image
                  ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    chairman.teacher_image
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
              {getDepartmentName(
                chairman.department_short_name,
                chairman.department_name
              )}
              <br />
              European University of Bangladesh
            </p>
          )}
        </>
      )}

      {!isLoading && !chairman && <NoDataFound message='No Chairman Found.' />}
    </ContentWrapper>
  );
};

export default MessageFromChairman;
