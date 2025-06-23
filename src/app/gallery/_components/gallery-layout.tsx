import React from 'react';

import { IGallery } from '@/types';

import { cn } from '@/lib/utils';

import GalleryCard from './gallery-card';

const GalleryLayout: React.FC<{
	data: IGallery[];
	className?: string;
}> = ({ data, className }) => {
	return (
		<div className={cn('grid grid-cols-4 gap-4', className)}>
			{data.map((item, index) => (
				<GalleryCard key={index} data={item} />
			))}
		</div>
	);
};

export default GalleryLayout;
