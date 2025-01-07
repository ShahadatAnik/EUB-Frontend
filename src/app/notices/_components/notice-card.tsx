import React from 'react';

import { INotice } from '@/types';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

const NoticeCard: React.FC<{ data: INotice }> = ({ data }) => {
  return (
    <div className='py-3 border-b space-y-1'>
      <Link
        href={`/notices/${data.title}`}
        className='text-lg text-primary font-semibold hover:underline'
      >
        {data.title}
      </Link>
      <div className='flex items-center gap-2 text-orange-600'>
        <Calendar className='size-5 ' />
        <span>{format(new Date(data.date), 'dd MMM, yyyy')}</span>
      </div>
    </div>
  );
};

export default NoticeCard;
