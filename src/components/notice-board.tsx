'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getNotices } from '@/server/get';

import NoticeCard from '@/app/notices/_components/notice-card';

import QuickLinks from './quick-links';
import { Separator } from './ui/separator';

const NoticeBoard = () => {
  const { data } = useQuery({
    queryKey: ['notices'],
    queryFn: async () =>
      await getNotices({
        limit: 5,
        page: 1,
      }),
  });

  return (
    <div>
      <h3 className='text-xl font-semibold'>Notices</h3>
      <Separator className='my-2' />

      <div className='space-y-6 divide-y'>
        {data?.data.map((item, index) => (
          <NoticeCard key={index} data={item} />
        ))}
      </div>

      <QuickLinks className='mt-6' />
    </div>
  );
};

export default NoticeBoard;
