import ClientPdfLink from '@/components/client-pdf';
import { IOffer } from '@/types';
import React from 'react';

import Marquee from 'react-fast-marquee';

const Offers: React.FC<{ data: IOffer[] }> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div className='absolute bottom-0 left-0 right-0    z-10 bg-primary'>
      <Marquee className='h-14' autoFill pauseOnHover>
        <div>
          {data.map((item, index) => (
            <ClientPdfLink
              className='no-underline hover:underline inline-block text-white px-5 border-r'
              key={index}
              href={item.file}
              text={item.title}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Offers;
