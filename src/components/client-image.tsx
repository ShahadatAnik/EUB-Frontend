'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function ClientImage({ src, alt, ...props }: ImageProps) {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Image
      alt={alt ? alt : 'Image'}
      src={
        src !== null && src
          ? `${imageBaseUrl}${src}`
          : '/person-placeholder.jpg'
      }
      {...props}
    />
  );
}
