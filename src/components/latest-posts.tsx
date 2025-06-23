'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useGetDepartmentLatestNews } from '@/hooks/use-get-course';

import ClientImage from './client-image';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
	ssr: false,
});

const LatestPosts = ({ department }: { department: string }) => {
	const { data, isLoading } = useGetDepartmentLatestNews(department);

	if (isLoading) {
		return (
			<div>
				<Skeleton className='h-8 w-full' />
				<Separator className='mb-2 mt-2' />
				<Skeleton className='h-20 w-full' />
				<Skeleton className='mt-4 flex h-8 w-full' />
			</div>
		);
	}

	if (!data || data.length === 0) {
		return <div className='text-center text-gray-500'>No latest posts available.</div>;
	}

	return (
		<div>
			<h4 className='text-lg font-semibold'>Latest Posts</h4>
			<Separator className='mb-2 mt-2' />
			<ScrollArea className='h-full lg:max-h-[500px]'>
				<ul className='mt-4 space-y-4'>
					{data.map((item, index) => (
						<li key={index}>
							<div className='flex gap-4'>
								<div className='relative aspect-[3/2] h-[70px] rounded-sm border border-primary/10'>
									<ClientImage
										className='size-full object-contain'
										fill
										src={item.cover_image ? `${item.cover_image}` : '/images/news-portal/1.jpg'}
										alt={item.title}
									/>
								</div>
								<div>
									<Link href={`/news-events/${item.uuid}`} className='hover:underline'>
										<h6 className='line-clamp-1 text-base font-medium'>{item.title}</h6>
									</Link>

									{item.description && (
										<RichTextViewer content={item.description.slice(0, 40) + '...'} />
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</ScrollArea>

			<div className='mt-8 flex w-full'>
				<Link className='w-full' href={`/news-events`}>
					<Button className='w-full'>View all</Button>
				</Link>
			</div>
		</div>
	);
};

export default LatestPosts;
