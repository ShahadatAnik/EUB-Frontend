'use client';

import React, { useState } from 'react';
import ContentWrapper from './content-wrapper';
import { useQuery } from '@tanstack/react-query';
import { getNotices } from '@/server/get';
import NoticeCard from '@/app/notices/_components/notice-card';
import { Input } from '@/components/ui/input';
import { useDebounceValue } from 'usehooks-ts';
import ClientPagination from '@/components/client-pagination';

const Notices: React.FC<{ department: string }> = ({ department }) => {
  const limit = 10;

  const [page, setPage] = useState(1);
  const [debouncedValue, setValue] = useDebounceValue('', 500);

  const { data: notices, isLoading } = useQuery({
    queryKey: ['notices', page, limit, debouncedValue, department],
    queryFn: async () =>
      await getNotices({
        page,
        limit,
        q: debouncedValue,
      }),
  });

  return (
    <ContentWrapper title='Notices'>
      <div className='flex justify-end '>
        <Input
          onChange={(e) => setValue(e.target.value)}
          type='search'
          placeholder='Search Notices'
          className='w-[400px]'
        />
      </div>

      <div className='mb-8'>
        {notices?.data.map((item, index) => (
          <NoticeCard key={index} data={item} />
        ))}
      </div>

      {!isLoading && notices && notices?.pagination && (
        <ClientPagination pagination={notices?.pagination} setPage={setPage} />
      )}
    </ContentWrapper>
  );
};

export default Notices;
