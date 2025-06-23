import React from 'react';

import Image from 'next/image';

import { Mail, Phone } from 'lucide-react';

import data from '../_const/office-members';
import ContentWrapper from './content-wrapper';

const Offices = () => {
  return (
    <ContentWrapper title='Office of the IQAC' className='space-y-4'>
      <div className='flex overflow-hidden rounded-md border'>
        <div className=''>
          <Image
            src={'/person-placeholder.jpg'}
            alt={'Placeholder'}
            height={160}
            width={160}
          />
        </div>

        <div className='flex flex-col gap-0 px-6 py-3'>
          <div>
            <h3 className='text-xl font-semibold'>{data[0].name}</h3>
            <p className='mt-1 text-muted-foreground'>{data[0].designation}</p>
            <p className='text-muted-foreground'>{data[0].department}</p>
          </div>
          <div className='mt-2 text-muted-foreground'>
            <p className='flex items-center gap-2'>
              <Mail className='size-4' />
              {data[0].email}
            </p>
            <p className='flex items-center gap-2'>
              <Phone className='size-4' />
              {data[0].mobile}
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        {data.map((faculty, index) => (
          <div key={index} className='flex overflow-hidden rounded-md border'>
            <div className=''>
              <Image
                src={faculty.image}
                alt={faculty.name}
                height={160}
                width={160}
              />
            </div>

            <div className='flex flex-col gap-0 px-6 py-3'>
              <div>
                <h3 className='text-xl font-semibold'>{faculty.name}</h3>
                <p className='mt-1 text-muted-foreground'>
                  {faculty.designation}
                </p>
                <p className='text-muted-foreground'>{faculty.department}</p>
              </div>
              <div className='mt-2 text-muted-foreground'>
                <p className='flex items-center gap-2'>
                  <Mail className='size-4' />
                  {faculty.email}
                </p>
                <p className='flex items-center gap-2'>
                  <Phone className='size-4' />
                  {faculty.mobile}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Offices;
