import React from 'react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { getDepartmentLatestNews } from '@/server/get';
import ClientImage from './client-image';
import RichTextViewer from './rich-text-viewer';

const LatestPosts = async ({ department }: { department?: string }) => {
  const data = await getDepartmentLatestNews(department);

  return (
    <div>
      <h4 className='text-lg font-semibold'>Latest Posts</h4>
      <Separator className='mt-2 mb-2' />
      <ScrollArea className='h-full lg:max-h-[500px]'>
        <ul className='space-y-4 mt-4'>
          {data.map((item, index) => (
            <li key={index}>
              <div className='flex gap-4 justify-between'>
                <div className='h-[70px] aspect-[3/2]  relative'>
                  <ClientImage
                    className='object-contain size-full'
                    fill
                    src={
                      item.cover_image
                        ? `${item.cover_image}`
                        : '/images/news-portal/1.jpg'
                    }
                    alt={item.title}
                  />
                </div>
                <div>
                  <Link
                    href={`/news-events/${item.uuid}`}
                    className='hover:underline'
                  >
                    <h6 className='line-clamp-1 text-base font-medium'>
                      {item.title}
                    </h6>
                  </Link>

                  {item.description && (
                    <RichTextViewer
                      content={item.description.slice(0, 40) + '...'}
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>

      <div className='mt-8 flex w-full '>
        <Link className='w-full' href={`/news-events`}>
          <Button className='w-full'>View all</Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestPosts;
