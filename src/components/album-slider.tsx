'use client';

import Image from 'next/image';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

const AlbumSlider = ({ images }: { images: ReactImageGalleryItem[] }) => {
  return (
    <ImageGallery
      items={images}
      showThumbnails
      renderItem={({ original }) => (
        <div className='w-full aspect-[3/2] relative border border-primary/10 rounded-md'>
          <Image
            className='object-contain'
            src={original}
            alt={original}
            fill
          />
        </div>
      )}
    />
  );
};

export default AlbumSlider;
