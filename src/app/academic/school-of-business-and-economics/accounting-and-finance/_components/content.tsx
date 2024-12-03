'use client';

import Image from 'next/image';
import React, { useState } from 'react';

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
import { accordions } from './accordions';

const Content = () => {
  const [content, setContent] = useState<React.ReactNode | string>(
    accordions[1].content || ''
  );

  return (
    <div
      className='
    space-y-10
    '
    >
      <div className='grid lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2'>
          <div className='w-full aspect-video relative'>
            <Image
              fill
              src={'/images/accounting-and-finance.jpg'}
              alt='Accounting and Finance image'
            />
          </div>
        </div>
        <div>
          <h6 className='text-lg'>Quick Links</h6>
          <Separator className='mt-2 mb-4' />
          <QuickLinks />
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-10'>
        <div>
          <Accordion type='single' collapsible className='space-y-1'>
            {accordions.map((item, index) => (
              <AccordionItem key={index} value={item.title}>
                {item.href ? (
                  <Link href={item.href}>
                    <AccordionTrigger
                      showIcon={!!item.children}
                      className='bg-primary px-4 h-12 text-white'
                    >
                      {item.title}
                    </AccordionTrigger>
                  </Link>
                ) : (
                  <>
                    <AccordionTrigger
                      showIcon={!!item.children}
                      onClick={() => {
                        if (item.content) setContent(item.content);
                      }}
                      className='bg-primary px-4 h-12 text-white hover:no-underline'
                    >
                      {item.title}
                    </AccordionTrigger>
                    {item.children && (
                      <AccordionContent className='pl-4  flex flex-col pb-0 pt-1 space-y-1'>
                        {item.children.map((child, index) => (
                          <Button
                            key={index}
                            onClick={() => {
                              if (child.content) setContent(child.content);
                            }}
                            className={cn(
                              'rounded-none justify-start bg-gray-700'
                            )}
                          >
                            {child.title}
                          </Button>
                        ))}
                      </AccordionContent>
                    )}
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className='lg:col-span-2'>{content}</div>
      </div>
    </div>
  );
};

export default Content;
