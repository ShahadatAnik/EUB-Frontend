import React from 'react';

import NoticeCard from './notice-card';
import { IDataTable } from '@/types';

const Content: React.FC<{ data: IDataTable[] }> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <NoticeCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Content;
