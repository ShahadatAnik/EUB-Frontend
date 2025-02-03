import React, { useEffect, useState } from "react";
import Link from "next/link";

import ContentWrapper from "../content-wrapper";
import SystemTable, {
  SystemTableColumn,
} from "@/components/table/system-table";
import { formatDate } from "@/lib/utils";
import { IDataTable } from "@/types";
import { getEveningClassRoutine } from "@/server/get-courses";
import { useGetEveningClassRoutine } from "@/hooks/use-get-course";

const ClassRoutine = () => {
  const { data, columns } = useGetEveningClassRoutine("BBA");

  return (
    <ContentWrapper title="Class Routine">
      <SystemTable caption="Class Routine" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
