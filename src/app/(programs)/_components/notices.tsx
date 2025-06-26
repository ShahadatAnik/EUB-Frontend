'use client';

import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useDebounceValue } from 'usehooks-ts';

import { getNoticesByDepartment } from '@/server/get/get-notices';

import ClientPagination from '@/components/client-pagination';
import NoDataFound from '@/components/no-data-found';
import { Input } from '@/components/ui/input';

import NoticeCard from '@/app/notices/_components/notice-card';

import ContentWrapper from './content-wrapper';
import NoticesSkeleton from './skeleton/notices-skeleton';

const Notices: React.FC<{ department: string }> = ({ department }) => {
  const limit = 10;

  const [page, setPage] = useState(1);
  const [debouncedValue, setValue] = useDebounceValue('', 500);

  const { data: notices, isLoading } = useQuery({
    queryKey: ['notices', department, page, limit, debouncedValue],
    queryFn: async () =>
      await getNoticesByDepartment({
        page,
        limit,
        q: debouncedValue,
        department,
      }),
  });

  return (
    <ContentWrapper title='Notices' className='space-y-8'>
      <div className='flex justify-end'>
        <Input
          onChange={(e) => setValue(e.target.value)}
          type='search'
          placeholder='Search Notices'
          className='max-w-[300px] lg:w-[400px]'
        />
      </div>

      {isLoading && <NoticesSkeleton />}

      {!isLoading && (
        <div className='mb-8'>
          {notices?.data && notices.data.length > 0 ? (
            notices?.data.map((item, index) => (
              <NoticeCard key={index} data={item} />
            ))
          ) : (
            <NoDataFound />
          )}
        </div>
      )}

      {!isLoading && notices && notices?.pagination && (
        <ClientPagination pagination={notices?.pagination} setPage={setPage} />
      )}
    </ContentWrapper>
  );
};

export default Notices;
