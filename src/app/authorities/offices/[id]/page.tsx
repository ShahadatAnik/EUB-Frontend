
import React from "react";

import PageHeader from "@/components/page-header";
import { getOfficeEntry, getOffices } from "@/server/getOffices";
import Content from "./_components/content";

export default async function Page({
	params,
}: {
	params: Promise<{
		type: string;
		program: string;
		id: string;
		category: string;
	}>;
}) {
	const { id } = await params;
	const data = await getOfficeEntry(id);
	const listOfOffices = await getOffices();
	const title = listOfOffices?.find((item) => item.category === id)?.title;

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
}
