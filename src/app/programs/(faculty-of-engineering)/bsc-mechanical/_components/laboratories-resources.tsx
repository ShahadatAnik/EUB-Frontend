import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
  return (
    <ContentWrapper title='Laboratories and Resources' className='space-y-8'>
      <div>
        <h4 className='text-xl font-semibold'>Machine Shop</h4>
        <div className='mt-2'>
          <div className='float-right ml-6 flex flex-wrap gap-2'>
            <Image
              width={300}
              height={300}
              src={'/images/programs/me/lab/machine_shop-1.png'}
              alt='placeholder'
            />
            <Image
              className='h-[273px]'
              width={300}
              height={300}
              src={'/images/programs/me/lab/machine_shop-2.png'}
              alt='placeholder'
            />
          </div>

          <p className='text-justify'>
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

          <h6 className='mt-5 font-bold'>Name of Equipment:</h6>
          <ul className='mt-4 list-disc space-y-2 pl-6'>
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

          <div className='mt-5 flex flex-wrap justify-center gap-2'>
            <Image
              width={250}
              height={250}
              src={'/images/programs/me/lab/arc_welding_machine.png'}
              alt='placeholder'
            />
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/lathe_machine.png'}
              alt='placeholder'
            />{' '}
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/venturi_meter.png'}
              alt='placeholder'
            />{' '}
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/shaper_machine.png'}
              alt='placeholder'
            />
            <Image
              width={250}
              height={250}
              src={'/images/programs/me/lab/drilling_machine.png'}
              alt='placeholder'
            />
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/milling_machine.png'}
              alt='placeholder'
            />{' '}
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/grinding_machine.png'}
              alt='placeholder'
            />{' '}
            <Image
              className=''
              width={250}
              height={250}
              src={'/images/programs/me/lab/sand_casting.png'}
              alt='placeholder'
            />
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>Drawing Lab</h4>
        <div className='mt-2'>
          <div className='float-left mr-6 flex flex-wrap gap-2'>
            <Image
              width={200}
              height={200}
              src={'/images/programs/me/lab/drawing_lab-1.png'}
              alt='placeholder'
            />
            <Image
              width={300}
              height={300}
              src={'/images/programs/me/lab/drawing_lab-2.png'}
              alt='placeholder'
            />
            <Image
              width={100}
              height={200}
              src={'/images/programs/me/lab/t_scale.png'}
              alt='placeholder'
            />
          </div>

          <p className='text-justify'>
            An Engineering Drawing Lab is a practical workspace where students
            and professionals learn and practice creating technical drawings,
            essential for engineering design and communication. It involves
            using various tools and software to produce precise, standardized 2D
            and 3D drawings of mechanical, electrical, or civil structures.
            These drawings detail the dimensions, materials, and assembly
            instructions necessary for manufacturing and construction. The lab
            typically covers skills such as sketching, drafting, and using CAD
            (Computer-Aided Design) software, preparing individuals for
            real-world engineering tasks.
          </p>
        </div>
      </div>
      <div>
        <h4 className='mt-20 text-xl font-semibold'>
          Refrigeration & Air Condition
        </h4>
        <div className='mt-2'>
          <p className='text-justify'>
            Refrigeration and Air Conditioning (RAC) involve systems designed to
            control temperature and humidity. Refrigeration focuses on cooling
            spaces to preserve food or materials, while air conditioning manages
            both temperature and humidity for comfort. These systems use various
            components like compressors, condensers, and evaporators, powered by
            refrigerants, to absorb and release heat. RAC technology is vital in
            industries like food storage, healthcare, and residential or
            commercial comfort.
          </p>
          <h6 className='mt-5 font-bold'>Name of Equipment:</h6>
          <ul className='mt-4 list-disc space-y-2 pl-6'>
            <li>Refrigeration.</li>
            <li>Air Condition.</li>
            <li>3D Printing.</li>
            <li>Automatic Electronic Steam Boiler.</li>
            <li>Automatic Plant Watering System.</li>
          </ul>

          <div className='mt-5 flex flex-wrap gap-2'>
            <Image
              width={100}
              height={100}
              src={
                '/images/programs/me/lab/refrigeration_and_air_condition_lab-1.png'
              }
              alt='placeholder'
            />
            <Image
              width={300}
              height={300}
              src={
                '/images/programs/me/lab/refrigeration_and_air_condition_lab-2.png'
              }
              alt='placeholder'
            />
            <Image
              width={200}
              height={200}
              src={'/images/programs/me/lab/refrigeration_cycle.png'}
              alt='placeholder'
            />{' '}
            <Image
              width={200}
              height={200}
              src={'/images/programs/me/lab/3d_printer.png'}
              alt='placeholder'
            />
            <Image
              width={200}
              height={200}
              src={
                '/images/programs/me/lab/automatic_electronic_steam_boiler.png'
              }
              alt='placeholder'
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LaboratoriesResources;
