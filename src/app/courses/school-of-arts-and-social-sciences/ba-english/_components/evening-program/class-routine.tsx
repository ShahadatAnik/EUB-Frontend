import React from "react";
import ContentWrapper from "../content-wrapper";
import SystemTable from "@/components/table/system-table";
import { useGetEveningClassRoutine } from "@/hooks/use-get-course";

const ClassRoutine = () => {
  const { data, columns } = useGetEveningClassRoutine("BA-ENGLISH");
  return (
    <ContentWrapper title="Class Routine">
      <SystemTable caption="Class Routine" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ClassRoutine;
