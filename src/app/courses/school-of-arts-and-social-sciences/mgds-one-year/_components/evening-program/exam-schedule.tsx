import React from "react";

import ContentWrapper from "../content-wrapper";
import SystemTable from "@/components/table/system-table";
import { useGetEveningExamSchedule } from "@/hooks/use-get-course";

const ExamSchedule = () => {
  const { data, columns } = useGetEveningExamSchedule("MGDS-ONE-YEAR");
  return (
    <ContentWrapper title="Exam Schedule">
      <SystemTable caption="Exam Schedule" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
