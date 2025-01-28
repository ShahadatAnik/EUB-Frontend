import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { Calendar, UserRoundCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const QuickLinks: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-6', className)}>
      <Link
        href={'/notices'}
        className={buttonVariants({
          className: 'w-full',
        })}
      >
        View All Notices
      </Link>
      {/* <Link
        href={'/schedule-events'}
        className={buttonVariants({
          className: 'w-full',
        })}
      >
        <Calendar className='!size-4' />
        Schedule Events
      </Link> */}

      {/* <Link
        href={'/degree-verification'}
        className={buttonVariants({
          variant: 'outline',
          className: 'w-full',
        })}
      >
        <UserRoundCheck className='!size-4' />
        Degree Verification
      </Link> */}

      <Link
        href={'/online-admission'}
        className={buttonVariants({
          variant: 'outline',
          className: 'w-full',
        })}
      >
        Apply Online
      </Link>

      <Link
        href={'/career'}
        className={buttonVariants({
          className: 'w-full font-bold',
        })}
      >
        Career Opportunity
      </Link>
    </div>
  );
};

export default QuickLinks;
