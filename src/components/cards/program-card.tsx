import * as React from 'react';

import Link from 'next/link';

import { ChevronsRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

interface IProgramCardProps {
	title: string;
	links: {
		title: string;
		href: string;
	}[];
}

const ProgramCard: React.FC<IProgramCardProps> = ({ title, links }) => {
	return (
		<Card className='w-full border-none shadow-none'>
			<CardHeader className='rounded bg-primary p-4'>
				<CardTitle className='text-white'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='p-2'>
				<ul className='space-y-1'>
					{links.map((item, index) => (
						<li key={index}>
							<Link className={cn('flex items-center gap-1 hover:underline')} href={item.href}>
								<ChevronsRight className='size-4' />
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default ProgramCard;
