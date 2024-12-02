'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import SlideNext from './slide-next';
import SlidePrevious from './slide-previous';

export interface ISlide {
  img: string;
  alt: string;
  content?: React.ReactNode | string;
}

interface ISliderProps {
  sliders: ISlide[];
}

const Slider: React.FC<ISliderProps> = ({ sliders }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);

  return (
    <Swiper
      className='h-full w-full'
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        setIsEnd(swiper.isEnd);
        setIsBeginning(swiper.isBeginning);
      }}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index} className='relative'>
          <div className='absolute inset-0 bg-black/20 z-[1] flex justify-between'>
            <SlidePrevious isBeginning={isBeginning} />
            <div className='flex-1 flex items-center justify-center'>
              {slide.content}
            </div>
            <SlideNext isEnd={isEnd} />
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
