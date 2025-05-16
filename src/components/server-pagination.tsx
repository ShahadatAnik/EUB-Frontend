"use client";

import React from "react";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { IPagination } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const ServerPagination: React.FC<{ pagination: IPagination }> = ({
	pagination: { current_page, total_page },
}) => {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const q = searchParams.get("q");

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<Button variant={"ghost"} disabled={current_page === 1}>
						<PaginationPrevious
							href={
								q
									? `${pathName}?page=${
											current_page - 1
									  }&q=${q}`
									: `${pathName}?page=${current_page - 1}`
							}
						/>
					</Button>
				</PaginationItem>
				{(() => {
					let start = 1;
					let end = 5;

					if (total_page <= 5) {
						
						start = 1;
						end = total_page;
					} else if (current_page <= 3) {
					
						start = 1;
						end = 5;
					} else if (current_page + 2 >= total_page) {
					
						start = total_page - 4;
						end = total_page;
					} else {
						
						start = current_page - 2;
						end = current_page + 2;
					}

					return Array.from({ length: end - start + 1 }, (_, i) => (
						<PaginationLink
							key={start + i}
							href={
								q
									? `${pathName}?page=${start + i}&q=${q}`
									: `${pathName}?page=${start + i}`
							}
						>
							{start + i}
						</PaginationLink>
					));
				})()}

				{total_page > 5 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				<PaginationItem>
					<Button
						variant={"ghost"}
						disabled={current_page === total_page}
					>
						<PaginationNext
							href={
								q
									? `${pathName}?page=${
											current_page + 1
									  }&q=${q}`
									: `${pathName}?page=${current_page + 1}`
							}
						/>
					</Button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default ServerPagination;
