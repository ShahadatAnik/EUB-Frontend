import Link from "next/link";
import React from "react";

import SystemTable, {
	SystemTableColumn,
} from "@/components/table/system-table";
import { getEveningExamSchedule } from "@/server/get-courses";
import ContentWrapper from "../content-wrapper";

const data = await getEveningExamSchedule("CSE");

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
		accessorKey: "updatedAt",
		header: "Updated At",
	},
];

const ExamSchedule = () => {
	return (
		<ContentWrapper title="Exam Schedule">
			<SystemTable
				caption="Exam Schedule"
				data={data}
				columns={columns}
			/>
		</ContentWrapper>
	);
};

export default ExamSchedule;
