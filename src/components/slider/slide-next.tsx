import React from 'react';

import { ChevronRight } from 'lucide-react';
import { useSwiper } from 'swiper/react';

import { Button } from '../ui/button';

const SlideNext: React.FC<{ isEnd?: boolean }> = ({ isEnd }) => {
	const swiper = useSwiper();

	return (
		<div className='flex h-full w-10 items-center justify-center lg:w-[100px]'>
			<Button
				disabled={isEnd}
				variant={'secondary'}
				size={'icon'}
				onClick={() => swiper.slideNext()}
				className='rounded-full lg:size-12'
			>
				<ChevronRight className='!size-6 lg:!size-8' />
			</Button>
		</div>
	);
};

export default SlideNext;
