import React from 'react';

import Image from 'next/image';

import { IOfficeEntry } from '@/types';
import { Mail, Phone } from 'lucide-react';

import ClientImage from '@/components/client-image';

const Employees: React.FC<{ data: IOfficeEntry[] }> = ({ data }) => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {data?.map((item, index) => (
        <div key={index} className='rounded-lg border py-3'>
          <div className='flex gap-4 px-3'>
            {item.image ? (
              <ClientImage
                src={item.image}
                alt={item.user_name}
                height={120}
                width={120}
              />
            ) : (
              <Image
                src={'/person-placeholder.jpg'}
                alt={item.user_name}
                height={120}
                width={120}
              />
            )}

            <div className='flex flex-1 flex-col gap-3'>
              <div className='space-y-0.5'>
                <h6 className='text-xl font-semibold'>{item.user_name}</h6>
                <p className='text-base text-muted-foreground'>
                  {item.user_designation}
                </p>
              </div>

              <div className='space-y-1'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Mail className='size-4' />
                  <span>{item.user_email}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Phone className='size-4' />
                  <span>{item.user_phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
