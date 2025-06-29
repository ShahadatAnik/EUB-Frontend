import React from 'react';

import FullScreenImage from '@/components/fullscreen-image';
import { Card, CardContent } from '@/components/ui/card';
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
          Machine Shop
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/me/lab/machine_shop-1.png'
              alt='Machine Shop 1'
            />
            <FullScreenImage
              src='/images/programs/me/lab/machine_shop-2.png'
              alt='Machine Shop 2'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          A machine shop is a facility where metalworking and machining
          processes occur to manufacture, modify, or repair parts and
          components. The workshop uses a variety of tools such as lathes,
          mills, drills, grinders and CNC machines to cut, shape and assemble
          materials (mostly metal). Machine shops serve industries such as
          automotive, aerospace, construction and manufacturing by making
          precise parts or custom-made items based on specifications or
          blueprints. The work environment focuses on maintaining accuracy,
          safety and quality of manufactured products.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>

        <ul className='my-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Arc Welding Machine.</li>
          <li>Lathe Machine.</li>
          <li>Venturi meter.</li>
          <li>Shaper Machine.</li>
          <li>Milling Machine.</li>
          <li>Drilling Machine.</li>
          <li>Roller Conveyor.</li>
          <li>Grinding Machine.</li>
          <li>Send Casting.</li>
        </ul>

        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-4'>
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/arc_welding_machine.png'
              alt='Arc Welding Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/lathe_machine.png'
              alt='Lathe Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/venturi_meter.png'
              alt='Venturi Meter'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/shaper_machine.png'
              alt='Shaper Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/drilling_machine.png'
              alt='Drilling Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/milling_machine.png'
              alt='Milling Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/grinding_machine.png'
              alt='Grinding Machine'
            />
            <FullScreenImage
              width={250}
              height={250}
              src='/images/programs/me/lab/sand_casting.png'
              alt='Sand Casting'
            />
          </CardContent>
        </Card>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Transportation Engineering Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Drawing Lab
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-3'>
            <FullScreenImage
              width={200}
              height={200}
              src='/images/programs/me/lab/drawing_lab-1.png'
              alt='Drawing Lab 1'
            />
            <FullScreenImage
              width={300}
              height={300}
              src='/images/programs/me/lab/drawing_lab-2.png'
              alt='Drawing Lab 2'
            />
            <FullScreenImage
              width={100}
              height={200}
              src='/images/programs/me/lab/t_scale.png'
              alt='T Scale'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          An Engineering Drawing Lab is a practical workspace where students and
          professionals learn and practice creating technical drawings,
          essential for engineering design and communication. It involves using
          various tools and software to produce precise, standardized 2D and 3D
          drawings of mechanical, electrical, or civil structures. These
          drawings detail the dimensions, materials, and assembly instructions
          necessary for manufacturing and construction. The lab typically covers
          skills such as sketching, drafting, and using CAD (Computer-Aided
          Design) software, preparing individuals for real-world engineering
          tasks.
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Open Channel Flow Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Refrigeration & Air Condition
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2 grid gap-2 lg:grid-cols-5'>
            <FullScreenImage
              width={100}
              height={100}
              src='/images/programs/me/lab/refrigeration_and_air_condition_lab-1.png'
              alt='Refrigeration and Air Condition Lab 1'
            />
            <FullScreenImage
              width={300}
              height={300}
              src='/images/programs/me/lab/refrigeration_and_air_condition_lab-2.png'
              alt='Refrigeration and Air Condition Lab 2'
            />
            <FullScreenImage
              width={200}
              height={200}
              src='/images/programs/me/lab/refrigeration_cycle.png'
              alt='Refrigeration Cycle'
            />
            <FullScreenImage
              width={200}
              height={200}
              src='/images/programs/me/lab/3d_printer.png'
              alt='3D Printer'
            />
            <FullScreenImage
              width={200}
              height={200}
              src='/images/programs/me/lab/automatic_electronic_steam_boiler.png'
              alt='Automatic Electronic Steam Boiler'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          Refrigeration and Air Conditioning (RAC) involve systems designed to
          control temperature and humidity. Refrigeration focuses on cooling
          spaces to preserve food or materials, while air conditioning manages
          both temperature and humidity for comfort. These systems use various
          components like compressors, condensers, and evaporators, powered by
          refrigerants, to absorb and release heat. RAC technology is vital in
          industries like food storage, healthcare, and residential or
          commercial comfort.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <ul className='mt-4 list-disc space-y-2 pl-6 text-sm text-gray-600'>
          <li>Refrigeration.</li>
          <li>Air Condition.</li>
          <li>3D Printing.</li>
          <li>Automatic Electronic Steam Boiler.</li>
          <li>Automatic Plant Watering System.</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default Page;
