import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<Link href={'/'}>
			<Image
				src={'/images/logo-eub.png'}
				alt='EUB Logo'
				width={200}
				height={50}
				className={cn('object-contain', className)}
			/>
		</Link>
	);
};

export default BrandLogo;
