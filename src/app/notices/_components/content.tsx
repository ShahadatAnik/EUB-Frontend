'use client';

import React from 'react';

import NoticeCard from './notice-card';
import { IDataTable } from '@/types';
import { useNotices } from '../_const/query';
import { Button } from '@/components/ui/button';

const Content: React.FC<{ initialData: IDataTable[] }> = ({ initialData }) => {
  const { data, refetch } = useNotices({ initialData });

  return (
    <div>
      <Button onClick={() => refetch()}>Reload</Button>
      {data.map((item, index) => (
        <NoticeCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Content;
