'use client';

import React from 'react';

import { RotatingLines } from 'react-loader-spinner';

import { cn } from '@/lib/utils';

const Loader: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={cn('flex h-screen items-center justify-center', className)}>
			<RotatingLines
				strokeColor='#303188'
				visible={true}
				width='50'
				strokeWidth='5'
				animationDuration='0.75'
				ariaLabel='rotating-lines-loading'
			/>
		</div>
	);
};

export default Loader;
