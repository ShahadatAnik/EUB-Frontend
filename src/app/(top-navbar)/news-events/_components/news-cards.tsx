import React from "react";

import dummyData from "../_const/data.json";
import NewsCard from "./news-card";
import { INewsPortal } from "@/types";

const NewsCards: React.FC<{ data?: INewsPortal[] }> = ({
  data = dummyData,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <NewsCard key={index} item={item as INewsPortal} />
      ))}
    </div>
  );
};

export default NewsCards;
