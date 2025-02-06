import React from "react";
import PageHeader from "@/components/page-header";
import PageContainer from "@/components/page-container";

import { INewsPortal } from "@/types";
import NewsCard from "@/app/(top-navbar)/news-events/_components/news-card";
import { getNewsEvents } from "@/server/getNewsEvents";
import PagePagination from "@/app/(top-navbar)/news-events/_components/pagination";

type searchParamsProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

export default async function Page({ searchParams }: searchParamsProps) {
  const limit = 1;

  const params = await searchParams;
  const page = Number(params?.page ? params?.page : 1);

  const data = await getNewsEvents(limit, page);
  console.log(data);
  return (
    <div>
      <PageHeader title="News & Events" image="/images/bg-2.jpg" />
      <PageContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((item: INewsPortal, index: number) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>

        <PagePagination pagination={data.pagination} />
      </PageContainer>
    </div>
  );
}
