import React from 'react';

import Slider, { ISlide } from '.';

const NoticeSlider = () => {
  const sliders: ISlide[] = [
    {
      img: '/images/news-portal/6.jpg',
      alt: 'Dummy Cover Image',
    },
    {
      img: '/images/news-portal/7.jpg',
      alt: 'Dummy Cover Image',
    },
    {
      img: '/images/news-portal/8.jpg',
      alt: 'Dummy Cover Image',
    },
  ];
  return <Slider sliders={sliders} />;
};

export default NoticeSlider;
