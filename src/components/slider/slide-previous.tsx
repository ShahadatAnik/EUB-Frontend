import React from 'react';
import { Button } from '../ui/button';
import { useSwiper } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';

const SlidePrevious: React.FC<{ isBeginning?: boolean }> = ({
  isBeginning,
}) => {
  const swiper = useSwiper();

  return (
    <div className='h-full w-[100px] flex items-center justify-center'>
      <Button
        disabled={isBeginning}
        variant={'outline'}
        size={'icon'}
        onClick={() => swiper.slidePrev()}
        className='size-12 rounded-full'
      >
        <ChevronLeft />
      </Button>
    </div>
  );
};

export default SlidePrevious;
