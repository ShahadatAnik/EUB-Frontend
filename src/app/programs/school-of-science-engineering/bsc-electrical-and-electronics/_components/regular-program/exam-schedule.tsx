import React from "react";
import SystemTable from "@/components/table/system-table";
import ContentWrapper from "../content-wrapper";
import { useGetRegularExamSchedule } from "@/hooks/use-get-course";

const ExamSchedule = () => {
  const { data, columns } = useGetRegularExamSchedule("BSC-EEE");
  return (
    <ContentWrapper title="Exam Schedule">
      <SystemTable caption="Exam Schedule" data={data} columns={columns} />
    </ContentWrapper>
  );
};

export default ExamSchedule;
