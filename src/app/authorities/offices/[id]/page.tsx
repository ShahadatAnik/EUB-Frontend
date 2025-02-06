"use client";

import { usePathname } from "next/navigation";
import React from "react";

import PageHeader from "@/components/page-header";
import { useOfficeEntry, useOfficesWitOutInitialData } from "../_const/query";
import Content from "./_components/content";

const Page = () => {
	const pathName = usePathname();
	const category = pathName.split("/")[3];

	const { data: listOfOffices } = useOfficesWitOutInitialData();
	const { data } = useOfficeEntry(category as string);

	const title = listOfOffices?.find(
		(item) => `/authorities/offices/${item.category}` === pathName
	)?.title;
	return (
		<>
			<PageHeader title={title || "Office Details"} />
			<Content
				data={data || []}
				listOfOffices={listOfOffices || []}
				category={title || ""}
			/>
		</>
	);
};

export default Page;
