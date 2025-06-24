import React from 'react';

import { ChevronLeft } from 'lucide-react';
import { useSwiper } from 'swiper/react';

import { Button } from '../ui/button';

const SlidePrevious: React.FC<{ isBeginning?: boolean }> = ({
  isBeginning,
}) => {
  const swiper = useSwiper();

  return (
    <div className='flex h-full w-10 items-center justify-center lg:w-[100px]'>
      <Button
        disabled={isBeginning}
        variant={'secondary'}
        size={'icon'}
        onClick={() => swiper.slidePrev()}
        className='rounded-full lg:size-12'
      >
        <ChevronLeft className='!size-6 lg:!size-8' />
      </Button>
    </div>
  );
};

export default SlidePrevious;
