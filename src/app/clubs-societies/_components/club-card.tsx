import Image from 'next/image';
import React from 'react';

const ClubCard: React.FC<{
  image: string;
  designation: string;
  name: string;
  email: string;
  phone: string;
}> = ({ image, designation, name, email, phone }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Image src={image} alt='Person' width={200} height={200} />
      <p className='mt-4 text-xl font-semibold'>{designation}</p>
      <div className='mt-2 space-y-2 text-muted-foreground'>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
      </div>
    </div>
  );
};

export default ClubCard;
