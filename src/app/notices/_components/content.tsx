'use client';

import React from 'react';

import NoticeCard from './notice-card';
import { IDataTable } from '@/types';
import { useNotices } from '../_const/query';

const Content: React.FC<{ initialData: IDataTable[] }> = ({ initialData }) => {
  const { data } = useNotices({ initialData });

  return (
    <div>
      {data.map((item, index) => (
        <NoticeCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Content;
