import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IDepartmentTeacher } from '@/types';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

const FacultyCard: React.FC<{
  faculty: IDepartmentTeacher;
  redirectLink?: string;
  className?: string;
}> = ({ faculty, redirectLink, className }) => {
  return (
    <Card
      className={cn(
        'group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-xl',
        className
      )}
    >
      <CardContent className='p-0'>
        {/* Mobile Layout (vertical) */}
        <div className='flex flex-col sm:hidden'>
          {/* Mobile - Image at top */}
          <div className='flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
            <div className='relative aspect-passport h-[300px] overflow-hidden rounded-lg border-2 border-white shadow-lg'>
              <Image
                src={
                  faculty.teacher_image
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      faculty.teacher_image
                    : '/person-placeholder.jpg'
                }
                alt={faculty.teacher_name}
                fill
                className='object-cover object-top'
              />
            </div>
          </div>

          {/* Mobile - Content below */}
          <div className='p-4'>
            <div className='mb-3 flex items-start justify-between'>
              <div className='min-w-0 flex-1'>
                <Link
                  target='_blank'
                  className='hover:underline'
                  href={redirectLink || ''}
                >
                  <h3 className='mb-2 text-base font-bold leading-tight text-primary'>
                    {faculty.teacher_name}
                  </h3>
                </Link>

                <p className='inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600'>
                  {faculty.teacher_designation}
                </p>
              </div>

              <Link
                href={redirectLink || ''}
                target='_blank'
                className='ml-2 rounded-full bg-white p-1.5 shadow-md transition-colors group-hover:bg-primary group-hover:text-white'
              >
                <ExternalLink className='size-3.5' />
              </Link>
            </div>

            {/* Mobile - Contact Information */}
            <div className='space-y-3'>
              <div className='group/item flex items-start gap-2'>
                <div className='flex-shrink-0 rounded-full bg-primary/10 p-1.5 transition-colors group-hover/item:bg-primary group-hover/item:text-white'>
                  <Mail className='h-3 w-3' />
                </div>
                <div className='min-w-0 flex-1'>
                  <a
                    href={`mailto:${faculty.teacher_email}`}
                    className='block break-all text-sm font-medium text-gray-700 transition-colors hover:text-primary'
                  >
                    {faculty.teacher_email}
                  </a>
                </div>
              </div>

              <div className='group/item flex items-center gap-2'>
                <div className='flex-shrink-0 rounded-full bg-primary/10 p-1.5 transition-colors group-hover/item:bg-primary group-hover/item:text-white'>
                  <Phone className='h-3 w-3' />
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
        <div className='hidden sm:flex'>
          {/* Desktop - Image on left */}
          <div className='flex w-40 flex-shrink-0 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-2'>
            <div className='relative aspect-passport w-full overflow-hidden rounded-lg border-2 border-white shadow-lg'>
              <Image
                src={
                  faculty.teacher_image
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      faculty.teacher_image
                    : '/person-placeholder.jpg'
                }
                alt={faculty.teacher_name}
                fill
                className='object-cover object-top'
              />
            </div>
          </div>

          {/* Desktop - Content on right */}
          <div className='flex flex-1 flex-col justify-between p-4'>
            <div>
              <div className='mb-4 flex items-start justify-between'>
                <div className='min-w-0 flex-1'>
                  <Link
                    target='_blank'
                    className='hover:underline'
                    href={redirectLink || ''}
                  >
                    <h3 className='mb-1 truncate text-lg font-bold leading-tight text-primary'>
                      {faculty.teacher_name}
                    </h3>
                  </Link>

                  <p className='inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600'>
                    {faculty.teacher_designation}
                  </p>
                </div>

                <Link
                  href={redirectLink || ''}
                  target='_blank'
                  className='ml-2 rounded-full bg-white p-1.5 shadow-md transition-colors group-hover:bg-primary group-hover:text-white'
                >
                  <ExternalLink className='size-3.5' />
                </Link>
              </div>

              {/* Desktop - Contact Information */}
              <div className='space-y-4'>
                <div className='group/item flex items-start gap-2'>
                  <div className='flex-shrink-0 rounded-full bg-primary/10 p-1.5 transition-colors group-hover/item:bg-primary group-hover/item:text-white'>
                    <Mail className='h-3 w-3' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <a
                      href={`mailto:${faculty.teacher_email}`}
                      className='block break-all text-xs font-medium text-gray-700 transition-colors hover:text-primary'
                    >
                      {faculty.teacher_email}
                    </a>
                  </div>
                </div>

                <div className='group/item flex items-center gap-2'>
                  <div className='flex-shrink-0 rounded-full bg-primary/10 p-1.5 transition-colors group-hover/item:bg-primary group-hover/item:text-white'>
                    <Phone className='h-3 w-3' />
                  </div>
                  <a
                    href={`tel:${faculty.teacher_phone}`}
                    className='text-xs font-medium text-gray-700 transition-colors hover:text-primary'
                  >
                    {faculty.teacher_phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
