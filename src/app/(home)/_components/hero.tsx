'use client';

// Import Swiper styles
import React from 'react';

import { IHero, IOffer } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';

import Slider, { ISlide } from '../../../components/slider';
import Offers from './offers';

const Hero: React.FC<{
  offers: IOffer[];
  hero: IHero[];
}> = ({ offers, hero }) => {
  const sliders: ISlide[] = hero.map((item) => ({
    img: process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.file,
    alt: item.title,
  }));

  return (
    <div className='relative flex aspect-video w-full flex-col overflow-hidden lg:h-[calc(100svh-132px)]'>
      <Slider sliders={sliders} />
      <Offers data={offers} />
    </div>
  );
};

export default Hero;
