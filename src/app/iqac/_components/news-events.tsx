import React from "react";

import NewsCards from "@/app/(top-navbar)/news-events/_components/news-cards";
import ContentWrapper from "./content-wrapper";

const NewsEvents = () => {
  return (
    <ContentWrapper title="News & Events" className="py-2">
      <NewsCards />
    </ContentWrapper>
  );
};

export default NewsEvents;
