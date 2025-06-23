import React from 'react';

import data from '../_const/gallery-data.json';
import GalleryLayout from './gallery-layout';

const Content = () => {
  return (
    <div className='container py-6 lg:py-12'>
      <GalleryLayout data={data} />
    </div>
  );
};

export default Content;
