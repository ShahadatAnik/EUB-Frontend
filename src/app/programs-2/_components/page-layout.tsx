'use client';

import Image from 'next/image';
import React from 'react';

import QuickLinks from '@/components/quick-links';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import slugify from 'slugify';

import StickySidebar from '@/components/sticky-sidebar';
import { IPageItem } from '../_config/types';

const PageLayout: React.FC<{
  pages: IPageItem[];
  bannerImage: {
    src: string;
    alt: string;
  };
  showQuickLinks?: boolean;
  children: React.ReactNode;
}> = ({ pages, bannerImage, showQuickLinks = true, children }) => {
  const pathName = usePathname();

  const pathInitial =
    '/' + pathName.split('/')[1] + '/' + pathName.split('/')[2] || '';

  return (
    <div className='space-y-10'>
      {showQuickLinks && (
        <div className='grid lg:grid-cols-3 gap-4 lg:gap-10'>
          <div className='lg:col-span-2'>
            <div className='w-full aspect-video lg:aspect-auto lg:h-full lg:min-h-[360px]  relative'>
              <Image
                fill
                className='object-cover object-top'
                src={bannerImage.src}
                alt={bannerImage.alt}
              />
            </div>
          </div>
          <div>
            <h6 className='text-lg'>Quick Links</h6>
            <Separator className='mt-2 mb-4' />
            <QuickLinks />
          </div>
        </div>
      )}

      <div className='grid lg:grid-cols-5 gap-10'>
        <StickySidebar className='lg:w-full' containerClassName='lg:pt-0'>
          <Accordion
            defaultValue={pathName.split('/')[3] || ''}
            type='single'
            collapsible
            className='space-y-1'
          >
            {pages.map((item, index) => {
              const title = slugify(item.title, { lower: true });

              return (
                <AccordionItem
                  key={index}
                  value={slugify(item.title, { lower: true })}
                >
                  {item.href ? (
                    <Link
                      target={item.redirect ? '_blank' : '_self'}
                      href={
                        item.redirect
                          ? item.href
                          : `${pathInitial}/${item.href}`
                      }
                    >
                      <AccordionTrigger
                        showIcon={!!item.items}
                        className={cn(
                          'bg-primary px-4 h-12 text-white',
                          pathName === pathInitial + item.href &&
                            'underline font-medium'
                        )}
                      >
                        {item.title}
                      </AccordionTrigger>
                    </Link>
                  ) : (
                    <>
                      <AccordionTrigger
                        showIcon={!!item.items}
                        onClick={() => {}}
                        className={cn(
                          'bg-primary px-4 h-12 text-white hover:no-underline',
                          pathName === title && 'underline font-medium'
                        )}
                      >
                        {item.title}
                      </AccordionTrigger>
                      {item.items && (
                        <AccordionContent className='pl-2 flex flex-col pb-0 pt-1 space-y-1 '>
                          {item.items.map((child, index) => {
                            const itemUrl =
                              pathInitial +
                              '/' +
                              slugify(item.title, { lower: true }) +
                              child.href!;
                            return (
                              <Link
                                key={index}
                                href={itemUrl}
                                className='w-full h-full'
                              >
                                <Button
                                  className={cn(
                                    'w-full rounded-none justify-start bg-gray-700 text-wrap h-full text-start',
                                    pathName === itemUrl &&
                                      'underline font-medium'
                                  )}
                                >
                                  {child.title}
                                </Button>
                              </Link>
                            );
                          })}
                        </AccordionContent>
                      )}
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </StickySidebar>
        <div className='lg:col-span-4'>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
