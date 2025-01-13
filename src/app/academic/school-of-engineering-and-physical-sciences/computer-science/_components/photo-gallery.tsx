import React from 'react';
import ContentWrapper from './content-wrapper';
import GalleryLayout from '@/app/gallery/_components/gallery-layout';
import data from '@/app/gallery/_const/gallery-data.json';

const PhotoGallery = () => {
  return (
    <ContentWrapper title='Photo Gallery'>
      <GalleryLayout className='grid-cols-3' data={data.slice(0, 6)} />
    </ContentWrapper>
  );
};

export default PhotoGallery;
