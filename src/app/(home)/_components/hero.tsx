'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';

import Slider, { ISlide } from '../../../components/slider';
import Offers from './offers';
import { IHero, IOffer } from '@/types';

const Hero: React.FC<{
  offers: IOffer[];
  hero: IHero[];
}> = ({ offers, hero }) => {
  const sliders: ISlide[] = hero.map((item) => ({
    img: process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.file,
    alt: item.title,
  }));

  return (
    <div className='h-[100svh] w-full relative'>
      <Slider sliders={sliders} />
      <Offers data={offers} />
    </div>
  );
};

export default Hero;
