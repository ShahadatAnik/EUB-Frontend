import Link from "next/link";
import React from "react";

import SystemTable, {
	SystemTableColumn,
} from "@/components/table/system-table";
import { getEveningClassRoutine } from "@/server/get-courses";
import ContentWrapper from "../content-wrapper";

const data = await getEveningClassRoutine("CSE");
const columns: SystemTableColumn<any>[] = [
	{
		accessorKey: "description",
		header: "Description",
		cell: (value) => (
			<Link href={value} className="underline text-primary font-medium">
				{" "}
				Test Pdf
			</Link>
		),
	},
	{
		accessorKey: "updated_at",
		header: "Updated At",
	},
];

const ClassRoutine = () => {
	return (
		<ContentWrapper title="Class Routine">
			<SystemTable
				caption="Class Routine"
				data={data}
				columns={columns}
			/>
		</ContentWrapper>
	);
};

export default ClassRoutine;
