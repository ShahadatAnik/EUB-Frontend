import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import data from '@/lib/data.json';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import PageHeader from '@/components/page-header';
import Link from 'next/link';
import PageContainer from '@/components/page-container';

const NewsPortalPage = () => {
  return (
    <div>
      <PageHeader title='News Portal' image='/images/bg-2.jpg' />
      <PageContainer>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item, index) => (
            <Card key={index} className=' overflow-hidden'>
              <CardHeader className='p-0 h-[200px]  relative'>
                <Image
                  className='w-full h-[200px] object-cover'
                  src={item.cover_image?.src}
                  fill
                  alt={item.cover_image?.alt}
                />
              </CardHeader>
              <CardContent className='pt-4'>
                <Link
                  href={`/news-portal/${item.id}`}
                  className='hover:underline'
                >
                  <CardTitle className='leading-normal line-clamp-2'>
                    {item.title}
                  </CardTitle>
                </Link>
                <CardDescription className='mt-1 line-clamp-3'>
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Link href={`/news-portal/${item.id}`}>
                  <Button>Read more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </PageContainer>
    </div>
  );
};

export default NewsPortalPage;
