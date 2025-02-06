import Image, { ImageProps } from "next/image";
import React from "react";

export default function ClientImage(props: ImageProps) {
  console.log(props.src);
  return (
    <Image
      {...props}
      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${props.src}`}
    />
  );
}
