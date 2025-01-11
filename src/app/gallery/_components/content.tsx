import React from 'react';
import data from '../_const/gallery-data.json';
import GalleryCard from './gallery-card';

const Content = () => {
  return (
    <div className='container py-6 lg:py-12'>
      <div className='grid grid-cols-4 gap-4'>
        {data.map((item, index) => (
          <GalleryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
