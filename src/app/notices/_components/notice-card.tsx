import React from 'react';

import Link from 'next/link';

import { IDataTable } from '@/types';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

const NoticeCard: React.FC<{ data: IDataTable }> = ({ data }) => {
	return (
		<div className='space-y-1 border-b py-3'>
			<Link
				target='_blank'
				href={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data.file}
				className='text-lg font-semibold text-primary hover:underline'
			>
				{data.description}
			</Link>
			<div className='flex items-center gap-2 text-orange-600'>
				<Calendar className='size-5' />
				<span>{format(new Date(data.created_at), 'dd MMM, yyyy')}</span>
			</div>
		</div>
	);
};

export default NoticeCard;
