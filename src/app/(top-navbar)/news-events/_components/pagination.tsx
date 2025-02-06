import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IPagination } from "@/types";

export default function PagePagination({
  pagination,
}: {
  pagination: IPagination;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // onClick={() => createPageURL(currentPage - 1)}
            href={`news-events?page=${pagination.prev_page}`}
            isActive={pagination.prev_page ? true : false}
          />
        </PaginationItem>
        <PaginationItem>
          {Array.from({ length: pagination.total_page }, (_, i) => (
            <PaginationLink key={i} href={`news-events?page=${i + 1}`}>
              {i + 1}
            </PaginationLink>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            // onClick={() => createPageURL(currentPage + 1)}
            href={`news-events?page=${pagination.next_page}`}
            isActive={pagination.next_page ? true : false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
