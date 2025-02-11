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
        <div className='w-full aspect-video relative'>
          <Image className='object-cover' src={original} alt={original} fill />
        </div>
      )}
    />
  );
};

export default AlbumSlider;
