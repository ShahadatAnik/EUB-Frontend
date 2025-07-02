import React from 'react';

import { Separator } from '@/components/ui/separator';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper
      title='Laboratories and Resources'
      className='max-w-3xl space-y-8'
    >
      {/* Environmental Engineering Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          CSE Lab 1
        </h3>

        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          Room No. 1020 <br />
          Short Description: CSE Lab 1 <br />
        </p>

        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Computer 29 units</li>
          <li>Projector 1 unit</li>
        </ul>

        <h4 className='mb-2 text-base font-medium text-foreground'>
          Software:
        </h4>
        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Code blocks</li>
          <li>Anaconda</li>
          <li>My SQL</li>
          <li>Xampp</li>
          <li>Android studio</li>
          <li>Virtualbox (Linux)</li>
          <li>Net beans</li>
          <li>Cisco packet tracer</li>
          <li>Dsch2</li>
          <li>emu8086</li>
          <li>Microsoft office</li>
          <li>AutoCAD</li>
          <li>Matlab</li>
        </ul>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Transportation Engineering Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          CSE Hardware Lab
        </h3>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          Room No. 1015 <br />
          Short Description: Hardware Lab
        </p>

        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>ic logic gate (AND, OR, XOR, NOT, NAND, NOR and XNOR)</li>
          <li>Breadboard 4 peace</li>
          <li>Male to male jumper wire</li>
        </ul>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Open Channel Flow Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          CSE Lab 2 1030
        </h3>

        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          Short Description: CSE Lab 2
        </p>

        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Computer 29 units</li>
          <li>Projector 1 unit</li>
        </ul>

        <h4 className='mb-2 text-base font-medium text-foreground'>
          Software:
        </h4>
        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Code blocks</li>
          <li>Anaconda</li>
          <li>My SQL</li>
          <li>Xampp</li>
          <li>Android studio</li>
          <li>Virtualbox (Linux)</li>
          <li>Net beans</li>
          <li>Cisco packet tracer</li>
          <li>Dsch2</li>
          <li>emu8086</li>
          <li>Microsoft office</li>
          <li>AutoCAD</li>
          <li>Matlab</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default Page;
