"use client";

import Link from "next/link";
import React from "react";

import SystemTable, {
  SystemTableColumn,
} from "@/components/table/system-table";

import { useEventCalendar } from "@/app/clubs-societies/_const/query";
import { formatDate } from "@/lib/utils";
import { IDataTable } from "@/types";

const columns: SystemTableColumn<IDataTable>[] = [
	{
		accessorKey: "description",
		cell: (value, row) => {
			return (
				<Link
					className="underline text-primary font-medium"
					href={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${row.file}`}
				>
					{value}
				</Link>
			);
		},
	},
	{
		accessorKey: "updated_at",
		cell: (value, row) => formatDate(value || row.created_at),
	},
];

const Content: React.FC<{ initialData: IDataTable[] }> = ({ initialData }) => {
	const { data } = useEventCalendar({ initialData });
	return <SystemTable data={data} columns={columns} />;
};

export default Content;
