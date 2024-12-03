'use client';

import React from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { ChevronsRight, Menu } from 'lucide-react';
import BrandLogo from '@/components/brand-logo';
import { navLinks } from '@/config/nav-links';
import Link from 'next/link';

const MobileNavbar = () => {
  return (
    <nav className='block lg:hidden bg-white/80 backdrop-blur-sm py-4'>
      <div className='container flex justify-between items-center'>
        <BrandLogo />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant='outline'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className=' p-2 pt-12 w-full sm:'>
            <Accordion type='single' collapsible className='w-full space-y-1'>
              {navLinks.map((item, index) => (
                <AccordionItem key={index} value={item.title}>
                  <AccordionTrigger className='bg-primary px-4 py-3 text-white'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className='pt-1 pb-0 pl-2'>
                    {!!item.children && item.children.length > 0 && (
                      <ul className='space-y-3'>
                        {item.children.map((child, index) => (
                          <li key={index}>
                            <div>
                              {child.href ? (
                                <Link
                                  className='text-base font-bold text-primary hover:underline'
                                  href={child.href!}
                                >
                                  {child.title}
                                </Link>
                              ) : (
                                <h6 className='text-base font-bold text-primary'>
                                  {child.title}
                                </h6>
                              )}

                              {child.children && child.children.length > 0 && (
                                <ul className='mt-1 space-y-1'>
                                  {child.children.map((subChild, index) => (
                                    <li key={index}>
                                      {subChild.href ? (
                                        <Link
                                          href={subChild.href!}
                                          className='flex items-center gap-1 hover:underline'
                                        >
                                          <ChevronsRight className='size-4' />
                                          {subChild.title}
                                        </Link>
                                      ) : (
                                        <p>{subChild.title}</p>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNavbar;
