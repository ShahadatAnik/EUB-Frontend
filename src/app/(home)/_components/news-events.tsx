import React from 'react';

import Link from 'next/link';

import { INewsPortal, IPaginationResponse } from '@/types';

import { buttonVariants } from '@/components/ui/button';

import NewsCard from '@/app/(top-navbar)/news-events/_components/news-card';

const NewsEvents: React.FC<IPaginationResponse<INewsPortal>> = ({ data }) => {
	return (
		<section className='py-12 lg:py-16 2xl:py-20'>
			<div className='container space-y-8'>
				<h2 className='text-center font-poppins text-2xl font-medium text-primary 2xl:text-4xl'>
					News & Events
				</h2>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{data.map((item: INewsPortal, index: number) => (
						<NewsCard key={index} item={item} />
					))}
				</div>

				<div className='flex justify-center'>
					<Link className={buttonVariants()} href={'/news-events'}>
						See All
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NewsEvents;
