import React from "react";
import SystemTable from "@/components/table/system-table";
import ContentWrapper from "../content-wrapper";
import { useGetEveningClassRoutine } from "@/hooks/use-get-course";

const ClassRoutine = () => {
  const { data, columns } = useGetEveningClassRoutine("BSC-MECHANICAL");
  return (
    <ContentWrapper title="Class Routine">
      <SystemTable caption="Class Routine" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
