'use client';

import React from 'react';

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

import NoDataFound from '@/components/no-data-found';
import Search from '@/components/search';
import ServerPagination from '@/components/server-pagination';
import { IClubAndSociety, IPaginationResponse, ISelectOption } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
	ssr: false,
});

const Content: React.FC<
	IPaginationResponse<ISelectOption> & { faculties: IClubAndSociety[] }
> = (res) => {
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

		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-4 md:space-y-8">
			<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
				<Search placeholder="Search for name, faculty" />
				<Select onValueChange={handleSelect}>
					<SelectTrigger className="md:w-[180px]">
						<SelectValue placeholder="Select a faculty" />
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
				<Accordion type="single" collapsible className="w-full ">
					{res.data.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger
								iconClassName="text-primary"
								className="bg-accent border-b text-primary text-base lg:text-lg px-4 lg:px-6 py-2 lg:py-3"
							>
								{item.label}
							</AccordionTrigger>
							<AccordionContent className="pl-2 lg:px-6 py-3 lg:py-4  text-base bg-background">
								<RichTextViewer content={item.value} />
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			)}

			<div className="flex justify-center">
				<ServerPagination pagination={res.pagination} />
			</div>
		</div>
	);
};

export default Content;
