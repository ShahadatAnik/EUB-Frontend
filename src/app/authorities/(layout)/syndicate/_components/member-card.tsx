import React from 'react';
import { Member } from '../_const/data';

const MemberCard: React.FC<{ data: Member }> = ({ data }) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='relative'>
        <div className='absolute size-full -top-1 -left-1 bg-primary/10'></div>
        <div className='relative z-10 top-1 left-1  size-10 bg-primary text-white text-lg flex items-center justify-center'>
          {data?.id}
        </div>
      </div>

      <div>
        <h5 className=' text-base text-primary font-poppins'>{data?.name}</h5>
        <p className=' text-sm text-muted-foreground'>{data?.designation}</p>
      </div>
    </div>
  );
};

export default MemberCard;
