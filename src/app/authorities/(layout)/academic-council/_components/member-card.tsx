'use-client';

import React from 'react';

import { Member } from '../_const/data';

const MemberCard: React.FC<{ data: Member; index: number }> = ({
  data,
  index,
}) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='relative'>
        <div className='absolute -left-1 -top-1 size-full bg-primary/10'></div>
        <div className='relative left-1 top-1 z-10 flex size-10 items-center justify-center bg-primary text-lg text-white'>
          {index}
        </div>
      </div>

      <div>
        <h5 className='font-poppins text-base text-primary'>{data.name}</h5>
        <p className='text-sm text-muted-foreground'>{data.designation}</p>
      </div>
    </div>
  );
};

export default MemberCard;
