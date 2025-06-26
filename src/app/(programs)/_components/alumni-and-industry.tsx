import React from 'react';

import { IAlumni } from '@/types';

import AlumniCard from './alumni-card';
import ContentWrapper from './content-wrapper';

const AlumniIndustry: React.FC<{ data: IAlumni[] }> = ({ data }) => {
  return (
    <ContentWrapper title='Alumni and Industry' className='lg:p-8'>
      <div className='space-y-12'>
        {data.map((item, index) => (
          <AlumniCard
            key={index}
            imageOrder={index % 2 === 0 ? 'left' : 'right'}
            {...item}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default AlumniIndustry;
