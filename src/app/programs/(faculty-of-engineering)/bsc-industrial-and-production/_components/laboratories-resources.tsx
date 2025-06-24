import React from 'react';

import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
  return (
    <ContentWrapper
      title='IPE Laboratories and Resources'
      className='max-w-3xl space-y-8'
    >
      {/* Header Section */}
      <div className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
          Driving Industrial Innovation and Efficiency
        </h2>
        <div className='space-y-4 text-justify leading-relaxed text-gray-600'>
          <p>
            The Department of Industrial and Production Engineering (IPE) at the
            European University of Bangladesh is dedicated to equipping students
            with the skills to optimize processes, reduce waste, and improve
            manufacturing systems. Our laboratories are central to this mission,
            providing a hands-on environment where theoretical knowledge is
            applied to real-world challenges. These state-of-the-art facilities
            support a comprehensive curriculum covering manufacturing, quality
            control, operations research, and production planning, ensuring our
            graduates are prepared to lead and innovate in a rapidly evolving
            industrial landscape.
          </p>
        </div>
      </div>

      <Separator className='my-8' />

      {/* Machine Shop */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-gray-700'>
          Machine Shop
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <Image
              src='https://via.placeholder.com/800x400?text=Machine+Shop'
              alt='Machine shop with lathe and milling machines'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          A machine shop lab is a specialized workspace equipped with tools and
          machinery for fabricating, modifying, and repairing metal or plastic
          parts. It typically includes equipment such as lathes, milling
          machines, drill presses, grinders, and CNC (Computer Numerical
          Control) machines. The lab is used for hands-on training, prototyping,
          and manufacturing, emphasizing precision, safety, and technical skills
          in machining and engineering processes.
        </p>
        <h4 className='mb-2 text-base font-medium text-gray-700'>Equipment:</h4>
        <p className='text-sm text-gray-600'>
          Arc Welding Machine, Lathe Machine, Venturi meter, Shaper Machine,
          Milling Machine, Drilling Machine, Roller Conveyor, Grinding Machine,
          Sand Casting.
        </p>
      </div>

      <Separator className='my-8' />

      {/* Drawing Lab */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-gray-700'>
          Drawing Lab
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <Image
              src='https://via.placeholder.com/800x400'
              alt='Engineering drawing lab with drafting tables'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          An Engineering Drawing Lab is a practical workspace where students and
          professionals learn and practice the creation of technical drawings, a
          fundamental skill for engineering design and communication. Equipped
          with tools like drafting boards, compasses, and CAD (Computer-Aided
          Design) software, the lab focuses on producing precise, standardized
          2D and 3D drawings of mechanical, electrical, or civil structures.
          These drawings provide detailed information on dimensions, materials,
          and assembly instructions, which are critical for manufacturing and
          construction processes. The lab emphasizes skills such as freehand
          sketching, manual drafting, and digital modeling, preparing
          individuals for real-world engineering challenges and fostering
          accuracy, creativity, and technical proficiency.
        </p>
        <h4 className='mb-2 text-base font-medium text-gray-700'>Equipment:</h4>
        <p className='text-sm text-gray-600'>T Square, Drawing Table.</p>
      </div>

      <Separator className='my-8' />

      {/* Refrigeration & Air Condition Lab */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-gray-700'>
          Refrigeration & Air Condition Lab
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <Image
              src='https://via.placeholder.com/800x400'
              alt='Refrigeration and Air Conditioning training unit'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          Refrigeration and Air Conditioning (RAC) encompass systems designed to
          regulate temperature and humidity for specific purposes. Refrigeration
          focuses on cooling spaces to preserve food, materials, or other
          perishables, while air conditioning ensures comfortable indoor
          environments by controlling both temperature and humidity. These
          systems rely on key components such as compressors, condensers,
          evaporators, and refrigerants to absorb and release heat efficiently.
          RAC technology plays a critical role in various industries, including
          food storage, healthcare, and residential or commercial comfort,
          making it indispensable in modern life.
        </p>
        <h4 className='mb-2 text-base font-medium text-gray-700'>Equipment:</h4>
        <p className='text-sm text-gray-600'>
          Refrigeration unit, Air Condition unit, 3D Printer, Automatic
          Electronic Steam Boiler, Automatic Plant Watering System.
        </p>
      </div>

      <Separator className='my-8' />

      {/* Computer Lab */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-gray-700'>
          Computer Lab
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <Image
              src='https://via.placeholder.com/800x400'
              alt='Computer lab with students using CAD software'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          A Computer Lab is a dedicated space where computer resources and
          services are provided to a specific community, such as students,
          researchers, or the general public. Commonly found in public
          libraries, academic institutions, and other organizations, these labs
          offer access to hardware, software, and internet connectivity. Users
          are typically required to adhere to a defined user policy, which
          outlines acceptable use, time limits, and other guidelines to ensure
          fair and secure access for all. Computer labs serve as essential hubs
          for learning, research, and digital productivity.
        </p>
        <h4 className='mb-2 text-base font-medium text-gray-700'>Hardware:</h4>
        <p className='mb-4 text-sm text-gray-600'>
          Monitor, PC, Mouse, Keyboard, UPS.
        </p>
        <h4 className='mb-2 text-base font-medium text-gray-700'>Software:</h4>
        <p className='text-sm text-gray-600'>
          Solidworks, AutoCAD, Minitab, MATLAB.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default LaboratoriesResources;
