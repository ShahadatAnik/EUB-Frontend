'use client';

import React from 'react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
					<div className='absolute inset-0 z-[10] flex justify-between gap-4 bg-black/20'>
						<SlidePrevious />
						<div className='flex flex-1 items-center justify-center'>{slide.content}</div>
						<SlideNext />
					</div>

					<div className='absolute inset-0 z-[1] bg-primary/30'></div>
					<Image fill src={slide.img} alt={slide.alt} className='object-cover' />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
