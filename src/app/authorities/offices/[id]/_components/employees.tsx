import React from 'react';
import data from '../_const/employees-data';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const Employees = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {data.map((item, index) => (
        <Card key={index} className='border border-gray-300'>
          <CardHeader className='p-4'>
            <div className='w-full aspect-square relative rounded overflow-hidden'>
              <Image fill src={item.image} alt={item.name} />
            </div>
          </CardHeader>
          <CardContent
            className='text-center space-y-2
          '
          >
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.designation}</CardDescription>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Employees;
