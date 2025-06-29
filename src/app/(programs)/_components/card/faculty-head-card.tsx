import Image from 'next/image';
import Link from 'next/link';

import { IDepartmentTeacher } from '@/types';
import { ExternalLink, Mail, Phone } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface FacultyHeadCardProps {
  faculty: IDepartmentTeacher;
  redirectLink?: string;
}

export function FacultyHeadCard({
  faculty,
  redirectLink,
}: FacultyHeadCardProps) {
  return (
    <Card className='group mb-8 overflow-hidden border-gray-200 bg-white transition-all duration-300 hover:shadow-lg'>
      <CardContent className='p-0'>
        {/* Mobile Layout (vertical) */}
        <div className='flex flex-col sm:hidden'>
          {/* Mobile - Image */}
          <div className='flex items-center justify-center bg-gray-50 p-6'>
            <div className='relative aspect-passport w-[300px] overflow-hidden rounded-lg border-2 border-gray-200 shadow-md'>
              <Image
                src={
                  faculty.teacher_image
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      faculty.teacher_image
                    : '/person-placeholder.jpg'
                }
                alt={faculty.teacher_name}
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Mobile - Content */}
          <div className='p-6'>
            <div className='mb-6 text-center'>
              <Link
                target='_blank'
                className='hover:underline'
                href={redirectLink || ''}
              >
                <h3 className='mb-2 text-lg font-bold leading-tight text-primary'>
                  {faculty.teacher_name}
                </h3>
              </Link>

              <p className='font-medium text-gray-600'>
                {faculty.teacher_designation}
              </p>
            </div>

            {/* Mobile - Contact Information */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3 rounded-lg bg-gray-50 p-3'>
                <div className='rounded-full bg-primary p-2 text-white'>
                  <Mail className='h-4 w-4' />
                </div>
                <div className='min-w-0 flex-1'>
                  <a
                    href={`mailto:${faculty.teacher_email}`}
                    className='break-all text-sm font-medium text-gray-700 transition-colors hover:text-primary'
                  >
                    {faculty.teacher_email}
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-3 rounded-lg bg-gray-50 p-3'>
                <div className='rounded-full bg-primary p-2 text-white'>
                  <Phone className='h-4 w-4' />
                </div>
                <a
                  href={`tel:${faculty.teacher_phone}`}
                  className='text-sm font-medium text-gray-700 transition-colors hover:text-primary'
                >
                  {faculty.teacher_phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout (horizontal) */}
        <div className='hidden sm:block'>
          {/* Desktop - Header */}
          {/* <div className='py- bg-primary px-4 py-3 text-white'>
            <div className='flex items-center justify-between'>
              <span className='text-lg font-medium'>Department Head</span>

              <Link
                href={redirectLink || ''}
                target='_blank'
                className='rounded-full bg-white/20 p-1.5'
              >
                <ExternalLink className='size-4' />
              </Link>
            </div>
          </div> */}

          <div className='flex'>
            {/* Desktop - Image on left */}
            <div className='flex w-60 flex-shrink-0 items-center justify-center bg-gray-50 p-4'>
              <div className='relative aspect-passport w-full overflow-hidden rounded-lg border-2 border-gray-200 shadow-md'>
                <Image
                  src={
                    faculty.teacher_image
                      ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                        faculty.teacher_image
                      : '/person-placeholder.jpg'
                  }
                  alt={faculty.teacher_name}
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            {/* Desktop - Content on right */}
            <div className='flex-1 p-8'>
              <div className='mb-6 flex items-start justify-between'>
                <div className='min-w-0 flex-1'>
                  <Link
                    target='_blank'
                    className='hover:underline'
                    href={redirectLink || ''}
                  >
                    <h3 className='mb-2 text-2xl font-bold leading-tight text-primary'>
                      {faculty.teacher_name}
                    </h3>
                  </Link>

                  <p className='text-lg font-medium text-gray-600'>
                    {faculty.teacher_designation}
                  </p>
                </div>

                <Link
                  href={redirectLink || ''}
                  target='_blank'
                  className='ml-2 rounded-full bg-white p-2 shadow-md transition-colors group-hover:bg-primary group-hover:text-white'
                >
                  <ExternalLink className='size-4' />
                </Link>
              </div>

              {/* Desktop - Contact Information */}
              <div className='grid grid-cols-1 gap-6'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-primary p-2 text-white'>
                      <Mail className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='text-xs font-medium uppercase tracking-wide text-gray-500'>
                        Email
                      </p>
                      <a
                        href={`mailto:${faculty.teacher_email}`}
                        className='break-all text-sm font-medium text-gray-700 transition-colors hover:text-primary'
                      >
                        {faculty.teacher_email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-primary p-2 text-white'>
                      <Phone className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='text-xs font-medium uppercase tracking-wide text-gray-500'>
                        Phone
                      </p>
                      <a
                        href={`tel:${faculty.teacher_phone}`}
                        className='text-sm font-medium text-gray-700 transition-colors hover:text-primary'
                      >
                        {faculty.teacher_phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
