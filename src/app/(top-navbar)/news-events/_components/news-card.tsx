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
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { INewsPortal } from '@/types';
import { formatDate } from 'date-fns';
import ClientImage from '@/components/client-image';
import RichTextViewer from '@/components/rich-text-viewer';

const NewsCard: React.FC<{ item: INewsPortal }> = ({ item }) => {
  return (
    <Card className=' overflow-hidden border-primary/10 '>
      <CardHeader className='p-0 w-full aspect-[3/2] relative bg-background border-b border-primary/10'>
        <ClientImage
          className='size-full object-contain'
          src={
            item?.cover_image
              ? `${item?.cover_image}`
              : '/images/news-portal/1.jpg'
          }
          fill
          alt={item?.cover_image || 'Dummy Cover Image'}
        />

        <div className='absolute -top-2 left-0 right-0 bottom-0 bg-gradient-to-b from-black/50  to-black/0'></div>
        <div className='absolute left-4 top-2'>
          <Badge variant={'light'} className='rounded-sm'>
            {formatDate(new Date(item.published_date), 'dd MMM, yyyy')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='pt-4'>
        <Link href={`/news-events/${item.uuid}`} className='hover:underline'>
          <CardTitle className='leading-normal line-clamp-2'>
            {item.title}
          </CardTitle>
        </Link>
        {item.description && (
          <CardDescription className='mt-1 line-clamp-3'>
            <RichTextViewer content={item.description.slice(0, 90) + '...'} />
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={`/news-events/${item.uuid}`}>
          <Button>Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
