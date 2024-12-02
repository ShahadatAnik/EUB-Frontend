import React from 'react';
import { Button } from '../ui/button';
import { useSwiper } from 'swiper/react';
import { ChevronRight } from 'lucide-react';

const SlideNext: React.FC<{ isEnd?: boolean }> = ({ isEnd }) => {
  const swiper = useSwiper();

  return (
    <div className='h-full w-[100px] flex items-center justify-center'>
      <Button
        disabled={isEnd}
        variant={'outline'}
        size={'icon'}
        onClick={() => swiper.slideNext()}
        className='size-12 rounded-full'
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default SlideNext;
