import Image from 'next/image';
import React from 'react';

const PhotoGallery = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='relative aspect-square'>
          <Image fill src={`/placeholder.svg`} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
