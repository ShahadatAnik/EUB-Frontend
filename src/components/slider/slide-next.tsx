import React from 'react';
import { Button } from '../ui/button';
import { useSwiper } from 'swiper/react';
import { ChevronRight } from 'lucide-react';

const SlideNext: React.FC<{ isEnd?: boolean }> = ({ isEnd }) => {
  const swiper = useSwiper();

  return (
    <div className='h-full w-10 lg:w-[100px] flex items-center justify-center'>
      <Button
        disabled={isEnd}
        variant={'secondary'}
        size={'icon'}
        onClick={() => swiper.slideNext()}
        className='lg:size-12 rounded-full'
      >
        <ChevronRight className='!size-6 lg:!size-8' />
      </Button>
    </div>
  );
};

export default SlideNext;
