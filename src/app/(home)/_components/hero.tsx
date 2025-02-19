'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';

import Slider, { ISlide } from '../../../components/slider';
import Offers from './offers';
import { IOffer } from '@/types';

const Hero: React.FC<{
  offers: IOffer[];
}> = ({ offers }) => {
  const sliders: ISlide[] = [
    {
      img: '/images/news-portal/1.jpg',
      alt: 'Dummy Cover Image',
      content: (
        <div className='px-6 py-5 rounded bg-white/80 backdrop-blur-sm max-w-[700px]'>
          <h2 className='text-xl font-semibold font-poppins text-primary'>
            EUB’s position in Bangladesh according to the following
            international ranking platforms
          </h2>

          <ul className='mt-2 space-y-2'>
            <li>
              1.1. Times Higher Education (THE) World University Rankings:{' '}
              <strong>
                2025, 2024, 2023 (Jointly #1 among all private and public
                universities)
              </strong>
            </li>
            <li>
              1.2. THE Asia University Rankings:
              <strong> 2024, 2023 (#1 private university)</strong>
            </li>
            <li>
              1.3. THE Young University Rankings:
              <strong>
                2024, 2023 (#1 among all private and public universities){' '}
              </strong>
            </li>
            <li>
              2.1. QS World University Rankings:
              <strong>2025, 2024 (#1 private university)</strong>
            </li>
          </ul>
        </div>
      ),
    },
    { img: '/images/news-portal/2.jpg', alt: 'Dummy Cover Image' },
    { img: '/images/news-portal/3.jpg', alt: 'Dummy Cover Image' },
  ];

  return (
    <div className='h-screen w-full relative'>
      <Slider sliders={sliders} />
      <Offers data={offers} />
    </div>
  );
};

export default Hero;
