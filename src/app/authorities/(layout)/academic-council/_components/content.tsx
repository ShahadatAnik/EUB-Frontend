import React from 'react';

import data from '../_const/data';
import MemberCard from './member-card';
import Title from '@/components/title';

const Content = () => {
  return (
    <div className='space-y-8'>
      <div>
        <Title title='Chairperson' />
        <MemberCard data={data.chairperson} />
      </div>

      <div>
        <Title title='Members' />
        <div className='space-y-4'>
          {data.members.map((member) => (
            <MemberCard key={member.id} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
