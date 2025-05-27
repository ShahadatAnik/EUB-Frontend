'use client';

import React, { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { ChevronsRight, Menu } from 'lucide-react';
import BrandLogo from '@/components/brand-logo';
import { navLinks, topNavLinks } from '@/config/nav-links';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='block lg:hidden bg-[#FFFBF5]/80 backdrop-blur-sm py-4'>
      <div className='container flex justify-between items-center'>
        <BrandLogo className='w-40' />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size={'icon'} variant='outline'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className='w-full space-y-8 h-full overflow-auto'>
            <SheetTitle className='sr-only'>
              European University of Bangladesh
            </SheetTitle>
            <SheetDescription className='sr-only'>
              The official website of the European University of Bangladesh
            </SheetDescription>
            <BrandLogo />
            <Accordion type='single' collapsible className='w-full space-y-1'>
              {navLinks.map((item, index) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <AccordionItem key={index} value={item.title}>
                      <AccordionTrigger className='bg-primary px-4 py-3 text-white'>
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className='pt-2.5 pb-2 pl-2'>
                        <ul className='space-y-3'>
                          {item.children.map((child, index) => (
                            <li key={index}>
                              <div>
                                {child.href ? (
                                  <Link
                                    onClick={() => setIsOpen(false)}
                                    className='text-sm font-semibold text-primary hover:underline'
                                    href={child.href!}
                                  >
                                    {child.title}
                                  </Link>
                                ) : (
                                  <h6 className='text-sm font-semibold text-primary'>
                                    {child.title}
                                  </h6>
                                )}

                                {child.children &&
                                  child.children.length > 0 && (
                                    <ul className='mt-1 space-y-1'>
                                      {child.children.map((subChild, index) => (
                                        <li key={index}>
                                          {subChild.href ? (
                                            <Link
                                              onClick={() => setIsOpen(false)}
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
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <Link className='block' key={index} href={item.href!}>
                    <Button
                      onClick={() => setIsOpen(false)}
                      className='w-full rounded-none justify-start'
                    >
                      {item.title}
                    </Button>
                  </Link>
                );
              })}

              <ul className='space-y-1'>
                {topNavLinks.map((item, index) => (
                  <li key={index}>
                    <Link className='block' key={index} href={item.href!}>
                      <Button
                        onClick={() => setIsOpen(false)}
                        className='w-full rounded-none justify-start'
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNavbar;
