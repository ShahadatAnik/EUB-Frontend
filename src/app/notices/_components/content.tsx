import React from 'react';
import data from '../_const/notices.json';
import NoticeCard from './notice-card';

const Content = () => {
  return (
    <div>
      {data.map((item, index) => (
        <NoticeCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Content;
