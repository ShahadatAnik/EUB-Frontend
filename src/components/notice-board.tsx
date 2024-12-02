import React from 'react';
import { Separator } from './ui/separator';
import noticeData from '@/lib/notice.json';

import NoticeCard from './cards/notice-card';
import { buttonVariants } from './ui/button';
import { Calendar, UserRoundCheck } from 'lucide-react';
import Link from 'next/link';

const NoticeBoard = () => {
  return (
    <div>
      <h3 className='text-xl font-semibold'>Notice</h3>
      <Separator className='my-2' />

      <div className='space-y-6 divide-y'>
        {noticeData.map((item, index) => (
          <NoticeCard key={index} data={item} />
        ))}
      </div>

      <div className='mt-6 space-y-6'>
        <Link
          href={'/notices'}
          className={buttonVariants({
            className: 'w-full',
          })}
        >
          View All Notices
        </Link>
        <Link
          href={'/schedule-events'}
          className={buttonVariants({
            className: 'w-full',
          })}
        >
          <Calendar className='!size-4' />
          Schedule Events
        </Link>

        <Link
          href={'/degree-verification'}
          className={buttonVariants({
            variant: 'outline',
            className: 'w-full',
          })}
        >
          <UserRoundCheck className='!size-4' />
          Degree Verification
        </Link>

        <Link
          href={'/apply-online'}
          className={buttonVariants({
            className: 'w-full',
          })}
        >
          EUB Admissions : <span className='font-semibold'>Apply Online</span>
        </Link>

        <Link
          href={'/career-opportunity'}
          className={buttonVariants({
            className: 'w-full font-bold',
          })}
        >
          Career Opportunity
        </Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
