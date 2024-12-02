import React from 'react';
import { Button } from '../ui/button';
import { useSwiper } from 'swiper/react';
import { ChevronLeft } from 'lucide-react';

const SlidePrevious: React.FC<{ isBeginning?: boolean }> = ({
  isBeginning,
}) => {
  const swiper = useSwiper();

  return (
    <div className='h-full w-10 lg:w-[100px] flex items-center justify-center'>
      <Button
        disabled={isBeginning}
        variant={'secondary'}
        size={'icon'}
        onClick={() => swiper.slidePrev()}
        className=' lg:size-12 rounded-full '
      >
        <ChevronLeft className='!size-6 lg:!size-8' />
      </Button>
    </div>
  );
};

export default SlidePrevious;
