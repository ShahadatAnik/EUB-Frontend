"use client";

import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import NoDataFound from "@/components/no-data-found";
import RichTextViewer from "@/components/rich-text-viewer";
import Search from "@/components/search";
import ServerPagination from "@/components/server-pagination";
import { IClubAndSociety, IPaginationResponse, ISelectOption } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Content: React.FC<
	IPaginationResponse<ISelectOption> & { faculties: IClubAndSociety[] }
> = (res) => {
	console.log(res);
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	function handleSelect(faculty: string) {
		const params = new URLSearchParams(searchParams);
		if (faculty) {
			params.set("q", faculty);
		} else {
			params.delete("q");
		}
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-8">
			<div className="flex justify-between gap-8">
				<Search placeholder="Search for name, faculty" />
				<Select onValueChange={handleSelect}>
					<SelectTrigger className="w-[180px]">
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
								className="bg-accent border-b text-primary text-lg px-6 py-3"
							>
								{item.label}
							</AccordionTrigger>
							<AccordionContent className="px-6 py-4  text-base bg-background">
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
