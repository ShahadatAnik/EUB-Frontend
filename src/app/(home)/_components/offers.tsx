import { IOffer } from '@/types';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Offers: React.FC<{ data: IOffer[] }> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div className='absolute bottom-0 left-0 right-0    z-10 bg-primary'>
      <Marquee className='h-14' autoFill>
        <div>
          {data.map((item, index) => (
            <p key={index} className='text-lg inline-block pr-10  text-white'>
              {item.title}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Offers;
