'use client';

import React, { useState } from 'react';
import ContentWrapper from './content-wrapper';
import { useQuery } from '@tanstack/react-query';
import NoticeCard from '@/app/notices/_components/notice-card';
import { Input } from '@/components/ui/input';
import { useDebounceValue } from 'usehooks-ts';
import ClientPagination from '@/components/client-pagination';
import { getNoticesByDepartment } from '@/server/get/get-notices';
import NoDataFound from '@/components/no-data-found';

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
      <div className='flex justify-end '>
        <Input
          onChange={(e) => setValue(e.target.value)}
          type='search'
          placeholder='Search Notices'
          className='w-[400px]'
        />
      </div>

      <div className='mb-8'>
        {notices?.data && notices.data.length > 0 ? (
          notices?.data.map((item, index) => (
            <NoticeCard key={index} data={item} />
          ))
        ) : (
          <NoDataFound />
        )}
      </div>

      {!isLoading && notices && notices?.pagination && (
        <ClientPagination pagination={notices?.pagination} setPage={setPage} />
      )}
    </ContentWrapper>
  );
};

export default Notices;
