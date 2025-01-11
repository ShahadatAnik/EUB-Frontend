import React from 'react';
import data from '../_const/employees-data';
import { Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Employees = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {data.map((item, index) => (
        <div key={index} className='py-3 border rounded-lg'>
          <div className='space-y-0.5 px-4 '>
            <h6 className='text-xl font-semibold'>{item.name}</h6>
            <p className='text-base text-muted-foreground'>
              {item.designation}
            </p>
          </div>

          <Separator className='my-3' />
          <div className='px-4'>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <Mail className='size-4' />
              <span>{item.email}</span>
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <Phone className='size-4' />
              <span>{item.phone}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
