import React from "react";
import Link from "next/link";

import SystemTable, {
  SystemTableColumn,
} from "@/components/table/system-table";
import Title from "@/components/title";
import { IDataTable } from "@/types";
import { formatDate } from "@/lib/utils";
import { getJournal } from "@/server/get/get-journal";
import { secret } from "@/config/secret";

const columns: SystemTableColumn<IDataTable>[] = [
  {
    accessorKey: "description",
    cell: (value, row) => {

      return (
        <Link
          className="underline text-primary font-medium"
          href={`${secret.imageBaseUrl}${row.file}`}
          target="_blank"
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

const Content = async () => {
  const data = await getJournal();

  return (
    <div className="space-y-8">
      <div>
        <Title title="EUB Journal" className="text-2xl" />
        <div className="pl-4 text-base   flex flex-col space-y-2">
          <Link href={"#"} className="underline text-primary">
            Copy Right Agreement
          </Link>
          <Link href={"#"} className="underline text-primary">
            Administration, Policy, and Guideline
          </Link>
          <Link href={"#"} className="underline text-primary">
            Publication Ethics and Malpractices Statement
          </Link>
          <Link href={"#"} className="underline text-primary">
            Templates
          </Link>
        </div>
      </div>
      <SystemTable data={data} columns={columns} />
    </div>
  );
};

export default Content;
