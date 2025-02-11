'use client';

import React from 'react';
import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import ContentWrapper from './content-wrapper';
import { useGetDepartmentTeachers } from '@/hooks/use-get-course';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ClientImage from '@/components/client-image';

const FacultyAndStaff = ({ department }: { department: string }) => {
  const { data: teachers } = useGetDepartmentTeachers(department);
  const departmentHead = teachers.find(
    (teacher) => teacher.department_head === true
  );

  const pathName = usePathname();
  const type = pathName.split('/')[2];
  const program = pathName.split('/')[3];

  const redirectUrlForHead = `/faculty/${type}/${program}/${departmentHead?.teacher_uuid}`;

  return (
    <ContentWrapper title='Core Faculty Members & Staff ' className='space-y-4'>
      <div className='flex border rounded-md overflow-hidden '>
        <div className='relative w-40 aspect-square'>
          <ClientImage
            className='object-cover'
            src={
              departmentHead?.teacher_image
                ? `${departmentHead?.teacher_image}`
                : '/person-placeholder.jpg'
            }
            alt={'teacher_image'}
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
              <h3 className='text-xl font-semibold'>
                {departmentHead?.teacher_name}
              </h3>
            </Link>
            <p className='mt-1 text-muted-foreground'>
              {departmentHead?.teacher_designation}
            </p>
            <p className='text-muted-foreground'>
              {departmentHead?.department_name}
            </p>
          </div>
          <div className='mt-2 text-muted-foreground'>
            <p className='flex items-center gap-2'>
              <Mail className='size-4' />
              {departmentHead?.teacher_email}
            </p>
            <p className='flex items-center gap-2'>
              <Phone className='size-4' />
              {departmentHead?.teacher_phone}
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 '>
        {teachers
          .filter((teacher) => teacher.department_head === false)
          .map((faculty, index) => (
            <div
              key={index}
              className='flex  border rounded-md overflow-hidden'
            >
              <div className='relative w-40 aspect-square'>
                <ClientImage
                  className='object-cover'
                  src={
                    faculty.teacher_image
                      ? `${faculty?.teacher_image}`
                      : '/person-placeholder.jpg'
                  }
                  alt={'teacher_image'}
                  fill
                />
              </div>

              <div className=' flex-1 px-6 py-3 flex flex-col gap-0 relative'>
                <Link
                  href={`/faculty/${type}/${program}/${faculty.teacher_uuid}`}
                  className='hover:text-primary'
                >
                  <div className='size-5 absolute top-3  right-4'>
                    <SquareArrowOutUpRight className='size-5' />
                  </div>
                </Link>
                <div>
                  <Link
                    className='hover:underline'
                    href={`/faculty/${type}/${program}/${faculty.teacher_uuid}`}
                  >
                    <h3 className='text-xl font-semibold'>
                      {faculty?.teacher_name}
                    </h3>
                  </Link>
                  <p className='mt-1 text-muted-foreground'>
                    {faculty.teacher_designation}
                  </p>
                  <p className='text-muted-foreground'>
                    {faculty.department_name}
                  </p>
                </div>
                <div className='mt-2 text-muted-foreground'>
                  <p className='flex items-center gap-2'>
                    <Mail className='size-4' />
                    {faculty.teacher_email}
                  </p>
                  <p className='flex items-center gap-2'>
                    <Phone className='size-4' />
                    {faculty.teacher_phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ContentWrapper>
  );
};

export default FacultyAndStaff;
