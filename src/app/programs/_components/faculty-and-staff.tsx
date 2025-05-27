'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Loader from '@/components/loader';
import { useGetDepartmentTeachers } from '@/hooks/use-get-course';
import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import ContentWrapper from './content-wrapper';

const FacultyAndStaff = ({ department }: { department: string }) => {
  const { data: teachers, isLoading } = useGetDepartmentTeachers(department);
  const departmentHead = teachers?.find(
    (teacher) => teacher.department_head === true
  );

  const pathName = usePathname();
  const program = pathName.split('/')[2];

  const redirectUrlForHead = `/faculty/${program}/${departmentHead?.teachers_uuid}`;

  if (isLoading) return <Loader className='h-[200px]' />;

  if (teachers?.length === 0) return <div>No Faculty Found</div>;

  return (
    <ContentWrapper title='Faculty Members & Staff' className='space-y-4'>
      {departmentHead && (
        <div className='flex flex-col sm:flex-row border rounded-md overflow-hidden '>
          <Image
            width={100}
            height={100}
            className='object-cover aspect-square object-top shrink-0 h-full size-full sm:size-[140px]'
            src={
              departmentHead?.teacher_image
                ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  departmentHead.teacher_image
                : '/person-placeholder.jpg'
            }
            alt={departmentHead.teacher_name}
          />

          <div className='flex-1 px-3 py-2 lg:px-6 lg:py-3 flex flex-col gap-0 relative'>
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

      <div className='grid xl:grid-cols-2 gap-4 '>
        {teachers
          ?.filter((teacher) => teacher.department_head === false)
          ?.map((faculty, index) => (
            <div key={index} className='flex border rounded-md overflow-hidden'>
              <Image
                width={100}
                height={100}
                className='h-full w-[100px] lg:w-[140px] object-cover aspect-square object-top shrink-0'
                src={
                  faculty.teacher_image
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      faculty.teacher_image
                    : '/person-placeholder.jpg'
                }
                alt={faculty.teacher_name || 'Teacher'}
              />
              <div className='flex-1 px-2.5 py-1.5 lg:px-6 lg:py-3 flex flex-col gap-0 relative justify-between'>
                <div className='w-full flex items-start justify-between'>
                  <div>
                    <Link
                      className='hover:underline'
                      href={`/faculty/${program}/${faculty.teachers_uuid}`}
                    >
                      <h3 className='text-sm lg:text-xl font-semibold'>
                        {faculty?.teacher_name}
                      </h3>
                    </Link>
                    <p className='mt-1 text-sm lg:text-base text-muted-foreground'>
                      {faculty.teacher_designation}
                    </p>
                  </div>

                  <Link
                    href={`/faculty/${program}/${faculty.teachers_uuid}`}
                    className='hover:text-primary '
                  >
                    <SquareArrowOutUpRight className='size-4 lg:size-5' />
                  </Link>
                </div>
                <div className='mt-2 text-muted-foreground w-full space-y-1'>
                  {faculty.teacher_email && (
                    <p className='w-full text-xs lg:text-base flex items-center gap-1 lg:gap-2'>
                      <Mail className='size-4 shrink-0' />
                      <span className='block w-[180px] md:w-full break-words'>
                        {faculty.teacher_email}
                      </span>
                    </p>
                  )}
                  {faculty.teacher_phone && (
                    <p className=' text-xs lg:text-base flex items-center gap-2'>
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
