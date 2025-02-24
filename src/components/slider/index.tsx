'use client';

import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import SlideNext from './slide-next';
import SlidePrevious from './slide-previous';
import { Autoplay } from 'swiper/modules';

export interface ISlide {
  img: string;
  alt: string;
  content?: React.ReactNode | string;
}

interface ISliderProps {
  sliders: ISlide[];
}

const Slider: React.FC<ISliderProps> = ({ sliders }) => {
  return (
    <Swiper
      className='h-full w-full'
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => {}}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index} className='relative'>
          <div className='absolute inset-0 bg-black/20 z-[1] flex justify-between gap-4'>
            <SlidePrevious />
            <div className='flex-1 flex items-center justify-center'>
              {slide.content}
            </div>
            <SlideNext />
          </div>
          <Image
            fill
            src={slide.img}
            alt={slide.alt}
            className='object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
