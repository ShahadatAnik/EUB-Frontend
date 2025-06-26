'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { IFacultyDetails } from '@/types';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

export function FacultyProfile({ faculty }: { faculty: IFacultyDetails }) {
  return (
    <Card className='mb-8 overflow-hidden border-gray-200 bg-white'>
      <CardContent className='p-0'>
        <div className='flex flex-col lg:flex-row'>
          {/* Profile Image */}
          <div className='flex items-center justify-center bg-secondary p-4 lg:w-80'>
            <div className='relative aspect-passport w-full overflow-hidden rounded-lg border-4 border-white shadow-xl'>
              <Image
                src={
                  faculty.teacher_image
                    ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      faculty.teacher_image
                    : '/person-placeholder.jpg'
                }
                alt={faculty.teacher_name}
                fill
                className='bg-blue-400 object-cover'
              />
            </div>
          </div>

          {/* Profile Information */}
          <div className='flex-1 p-8'>
            <div className='mb-6'>
              <h2 className='mb-2 text-3xl font-bold text-gray-900'>
                {faculty.teacher_name}
              </h2>
              <Badge
                variant='secondary'
                className='mb-4 bg-primary text-white hover:bg-[#1E1E5E]'
              >
                {faculty.teacher_designation}
              </Badge>

              <div className='space-y-2 text-gray-600'>
                <RichTextViewer content={faculty.education} />
              </div>
            </div>

            {/* Contact Information */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-primary p-2 text-white'>
                    <Phone className='h-4 w-4' />
                  </div>
                  <div>
                    <p className='text-xs font-medium uppercase text-gray-500'>
                      Phone
                    </p>
                    <a
                      href={`tel:${faculty.teacher_phone}`}
                      className='font-medium text-gray-700 hover:text-primary'
                    >
                      {faculty.teacher_phone}
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-primary p-2 text-white'>
                    <Mail className='h-4 w-4' />
                  </div>
                  <div>
                    <p className='text-xs font-medium uppercase text-gray-500'>
                      Email
                    </p>
                    <a
                      href={`mailto:${faculty.teacher_email}`}
                      className='break-all font-medium text-gray-700 hover:text-primary'
                    >
                      {faculty.teacher_email}
                    </a>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-primary p-2 text-white'>
                    <MapPin className='h-4 w-4' />
                  </div>
                  <div>
                    <p className='text-xs font-medium uppercase text-gray-500'>
                      Office
                    </p>
                    <p className='font-medium text-gray-700'>
                      {faculty.office}
                    </p>
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
