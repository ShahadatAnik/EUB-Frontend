import React from 'react';
import { Separator } from './ui/separator';
import noticeData from '@/lib/notice.json';

import NoticeCard from './cards/notice-card';
import QuickLinks from './quick-links';

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

      <QuickLinks className='mt-6' />
    </div>
  );
};

export default NoticeBoard;
