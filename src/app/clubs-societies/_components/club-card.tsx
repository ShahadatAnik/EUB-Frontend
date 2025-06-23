'use client';

import React from 'react';

import ClientImage from '@/components/client-image';

const ClubCard: React.FC<{
  image: string;
  designation: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}> = ({ image, name, email, phone, description }) => {
  return (
    <div className='flex flex-col-reverse gap-4 lg:flex-row'>
      <div className='flex flex-col'>
        <ClientImage src={image} alt='Person' width={200} height={200} />
        <p className='mt-3 text-xl font-semibold'>President</p>
        <div className='mt-2 space-y-2 text-muted-foreground'>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
        </div>
      </div>

      <p className='flex-1 text-justify text-muted-foreground'>{description}</p>
    </div>
  );
};

export default ClubCard;
