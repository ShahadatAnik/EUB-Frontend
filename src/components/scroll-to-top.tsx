'use client';

import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScrollToTopButtonProps {
  onClick: () => void;
  className?: string;
}

export function ScrollToTopButton({
  onClick,
  className,
}: ScrollToTopButtonProps) {
  return (
    <Button
      variant={'default'}
      onClick={onClick}
      size='icon'
      className={`fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2  ${
        className || ''
      }`}
      aria-label='Scroll to top'
    >
      <ChevronUp className='size-5' />
    </Button>
  );
}
