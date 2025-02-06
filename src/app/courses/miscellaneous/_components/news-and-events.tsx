import React from "react";

import ContentWrapper from "./content-wrapper";
import NewsCards from "@/app/(top-navbar)/news-events/_components/news-cards";
import { useGetDepartmentNews } from "@/hooks/use-get-course";

const NewsAndEvents = ({ department }: { department: string }) => {
  const { data } = useGetDepartmentNews(department);

  return (
    <ContentWrapper title="News & Events">
      <NewsCards length={data.length} data={data} />
    </ContentWrapper>
  );
};

export default NewsAndEvents;
