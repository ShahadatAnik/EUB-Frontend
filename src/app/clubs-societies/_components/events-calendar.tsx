"use client";

import React from "react";

import SystemTable, {
	SystemTableColumn,
} from "@/components/table/system-table";

import { useEventCalendar } from "@/app/clubs-societies/_const/query";
import ClientPDFLink from "@/components/client-pdf";
import { formatDate } from "@/lib/utils";
import { IDataTable } from "@/types";

const columns: SystemTableColumn<IDataTable>[] = [
	{
		accessorKey: "description",
		cell: (value:string, row) => {
			return <ClientPDFLink href={row.file || ""} value={value} />;
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
