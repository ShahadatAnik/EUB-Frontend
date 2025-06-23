'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IClubAndSociety, IPaginationResponse, ISelectOption } from '@/types';

import NoDataFound from '@/components/no-data-found';
import Search from '@/components/search';
import ServerPagination from '@/components/server-pagination';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
	ssr: false,
});

const Content: React.FC<IPaginationResponse<ISelectOption> & { faculties: IClubAndSociety[] }> = (
	res
) => {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	function handleSelect(faculty: string) {
		const params = new URLSearchParams(searchParams);
		if (faculty) {
			params.set('filter', faculty);
		} else {
			params.delete('filter');
		}

		params.set('page', '1');
		params.set('page', '1');

		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className='space-y-4 md:space-y-8'>
			<div className='flex flex-col justify-between gap-4 md:flex-row md:gap-8'>
				<Search placeholder='Search for name, faculty' />
				<Select onValueChange={handleSelect}>
					<SelectTrigger className='md:w-[180px]'>
						<SelectValue placeholder='Select a faculty' />
					</SelectTrigger>
					<SelectContent>
						{res.faculties.map((faculty, index) => (
							<SelectItem key={index} value={faculty.label}>
								{faculty.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			{res.data.length === 0 ? (
				<NoDataFound />
			) : (
				<Accordion type='single' collapsible className='w-full'>
					{res.data.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger
								iconClassName='text-primary'
								className='border-b bg-accent px-4 py-2 text-base text-primary lg:px-6 lg:py-3 lg:text-lg'
							>
								{item.label}
							</AccordionTrigger>
							<AccordionContent className='bg-background py-3 pl-2 text-base lg:px-6 lg:py-4'>
								<RichTextViewer content={item.value} />
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			)}

			<div className='flex justify-center'>
				<ServerPagination pagination={res.pagination} />
			</div>
		</div>
	);
};

export default Content;
