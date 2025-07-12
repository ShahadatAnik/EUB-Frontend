'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { useGetDepartmentTeachers } from '@/hooks/use-get-course';

import NoDataFound from '@/components/no-data-found';

import FacultyCard from './card/faculty-card';
import { FacultyHeadCard } from './card/faculty-head-card';
import ContentWrapper from './content-wrapper';
import FacultySkeleton from './skeleton/faculty-skeleton';

const FacultyAndStaff = ({ department }: { department: string }) => {
  const { data: teachers, isLoading } = useGetDepartmentTeachers(department);
  const departmentHead = teachers?.find(
    (teacher) => teacher.department_head === true
  );

  const pathName = usePathname();
  const program = pathName.split('/')[2];

  const redirectUrlForHead = `/faculty/${program}/${departmentHead?.teachers_uuid}`;

  return (
    <ContentWrapper title='Faculty Members' className='space-y-4'>
      {isLoading && <FacultySkeleton />}

      {!isLoading && (!teachers || teachers.length === 0) && (
        <NoDataFound message='No teachers found.' />
      )}
      {!isLoading && teachers && teachers.length > 0 && (
        <>
          {departmentHead && (
            <FacultyHeadCard
              faculty={departmentHead}
              redirectLink={redirectUrlForHead}
            />
          )}

          <div className='mb-6 flex items-center gap-4'>
            <div className='h-px flex-1 bg-gray-300'></div>
            <h2 className='px-4 text-xl font-semibold text-primary'>
              Other Members
            </h2>
            <div className='h-px flex-1 bg-gray-300'></div>
          </div>

          <div className='grid gap-4 xl:grid-cols-2'>
            {teachers
              ?.filter((teacher) => teacher.department_head === false)
              ?.map((faculty, index) => (
                <FacultyCard
                  key={index}
                  faculty={faculty}
                  redirectLink={`/faculty/${program}/${faculty.teachers_uuid}`}
                />
              ))}
          </div>
        </>
      )}
    </ContentWrapper>
  );
};

export default FacultyAndStaff;
