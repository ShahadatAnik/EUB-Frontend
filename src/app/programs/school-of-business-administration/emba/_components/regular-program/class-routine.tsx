import React from "react";

import ContentWrapper from "../content-wrapper";
import SystemTable from "@/components/table/system-table";
import { useGetRegularClassRoutine } from "@/hooks/use-get-course";

const ClassRoutine = () => {
  const { data, columns } = useGetRegularClassRoutine("EMBA");
  return (
    <ContentWrapper title="Class Routine">
      <SystemTable caption="Class Routine" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
