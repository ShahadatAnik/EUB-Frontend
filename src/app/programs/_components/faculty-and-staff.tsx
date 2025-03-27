'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import ContentWrapper from './content-wrapper';
import { useGetDepartmentTeachers } from '@/hooks/use-get-course';
import Loader from '@/components/loader';

const FacultyAndStaff = ({ department }: { department: string }) => {
  const { data: teachers, isLoading } = useGetDepartmentTeachers(department);
  const departmentHead = teachers?.find(
    (teacher) => teacher.department_head === true
  );

  const pathName = usePathname();
  const program = pathName.split('/')[2];

  const redirectUrlForHead = `/faculty/${program}/${departmentHead?.uuid}`;

  if (isLoading) return <Loader className='h-[200px]' />;

  if (teachers?.length === 0) return <div>No Faculty Found</div>;

  return (
    <ContentWrapper title='Core Faculty Members & Staff ' className='space-y-4'>
      {departmentHead && (
        <div className='flex flex-col lg:flex-row border rounded-md overflow-hidden '>
          <div className='relative lg:w-40 aspect-square'>
            <Image
              className='object-cover'
              src={
                departmentHead?.teacher_image
                  ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    departmentHead.teacher_image
                  : '/person-placeholder.jpg'
              }
              alt={departmentHead.teacher_name}
              fill
            />
          </div>

          <div className='flex-1 px-6 py-3 flex flex-col gap-0 relative'>
            <Link href={redirectUrlForHead} className='hover:text-primary'>
              <div className='size-5 absolute top-3  right-4'>
                <SquareArrowOutUpRight className='size-5' />
              </div>
            </Link>
            <div>
              <Link className='hover:underline' href={redirectUrlForHead}>
                <h3 className='text-lg lg:text-xl font-semibold'>
                  {departmentHead?.teacher_name}
                </h3>
              </Link>
              <p className='mt-1 text-sm lg:text-base text-muted-foreground'>
                {departmentHead?.teacher_designation}
              </p>
            </div>
            <div className='mt-2 text-muted-foreground'>
              {departmentHead?.teacher_email && (
                <p className='flex text-sm lg:text-base items-center gap-2'>
                  <Mail className='size-4' />
                  {departmentHead?.teacher_email}
                </p>
              )}
              {departmentHead?.teacher_phone && (
                <p className='flex text-sm lg:text-base items-center gap-2'>
                  <Phone className='size-4' />
                  {departmentHead?.teacher_phone}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className='grid lg:grid-cols-2 gap-4 '>
        {teachers
          ?.filter((teacher) => teacher.department_head === false)
          ?.map((faculty, index) => (
            <div
              key={index}
              className='flex  border rounded-md overflow-hidden'
            >
              <div className='relative w-24 lg:w-40 aspect-square'>
                <div className='absolute inset-0 bg-muted'></div>
                <Image
                  className='object-cover'
                  src={
                    faculty.teacher_image
                      ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                        faculty.teacher_image
                      : '/person-placeholder.jpg'
                  }
                  alt={faculty.teacher_name || 'Teacher'}
                  fill
                />
              </div>

              <div className='flex-1 px-3 py-2 lg:px-6 lg:py-3 flex flex-col gap-0 relative'>
                <Link
                  href={`/faculty/${program}/${faculty.uuid}`}
                  className='hover:text-primary'
                >
                  <div className='size-5 absolute top-3  right-4'>
                    <SquareArrowOutUpRight className='size-5' />
                  </div>
                </Link>
                <div>
                  <Link
                    className='hover:underline'
                    href={`/faculty/${program}/${faculty.uuid}`}
                  >
                    <h3 className='text-base lg:text-xl font-semibold'>
                      {faculty?.teacher_name}
                    </h3>
                  </Link>
                  <p className='mt-1 text-sm lg:text-base text-muted-foreground'>
                    {faculty.teacher_designation}
                  </p>
                </div>
                <div className='mt-2 text-muted-foreground'>
                  {faculty.teacher_email && (
                    <p className=' text-sm lg:text-base flex items-center gap-2'>
                      <Mail className='size-4' />
                      {faculty.teacher_email}
                    </p>
                  )}
                  {faculty.teacher_phone && (
                    <p className=' text-sm lg:text-base flex items-center gap-2'>
                      <Phone className='size-4' />
                      {faculty.teacher_phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </ContentWrapper>
  );
};

export default FacultyAndStaff;
