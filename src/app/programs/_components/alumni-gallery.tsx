import React from 'react';

import { IAlumni } from '@/types';

import AlumniCard from './alumni-card';

const AlumniGallery: React.FC<{ data: IAlumni[] }> = ({ data }) => {
  return (
    <div className='space-y-12'>
      {data.map((item, index) => (
        <AlumniCard
          key={index}
          imageOrder={index % 2 === 0 ? 'left' : 'right'}
          {...item}
        />
      ))}
    </div>
  );
};

export default AlumniGallery;
