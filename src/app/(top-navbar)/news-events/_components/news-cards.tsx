import React from 'react';

import { INewsPortal } from '@/types';

import dummyData from '../_const/data.json';
import NewsCard from './news-card';

const NewsCards: React.FC<{ data?: INewsPortal[] }> = ({
  data = dummyData,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {data.map((item, index) => (
        <NewsCard key={index} item={item as INewsPortal} />
      ))}
    </div>
  );
};

export default NewsCards;
