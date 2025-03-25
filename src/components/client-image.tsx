'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function ClientImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      alt={alt ? alt : 'Image'}
      src={
        src !== null && src
          ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${src}`
          : '/person-placeholder.jpg'
      }
      {...props}
    />
  );
}
