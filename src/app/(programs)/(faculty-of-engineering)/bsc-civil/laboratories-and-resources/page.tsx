import React from 'react';

import FullScreenImage from '@/components/fullscreen-image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/laboratories-and-resources',
  title:
    'Civil Engineering Labs & Resources | European University of Bangladesh',
  description:
    'Explore our state-of-the-art labs for Civil Engineering students at EUB, including facilities for Physics, Chemistry, Geotechnical, and Computer-Aided Design.',
  keywords: [
    'Civil Engineering labs',
    'EUB engineering laboratories',
    'Geotechnical Engineering lab',
    'Physics lab for engineers',
    'Chemistry lab facilities',
    'Computer-Aided Design (CAD) lab',
    'Engineering workshops EUB',
    'Hands-on engineering education',
    'Practical learning facilities',
  ],
});

const Page = () => {
  return (
    <ContentWrapper
      title='Laboratories and Resources'
      className='max-w-3xl space-y-8'
    >
      {/* Header Section */}
      <div className='mb-8'>
        <h2 className='mb-2 text-2xl font-semibold text-foreground'>
          Fostering Practical Excellence in Civil Engineering
        </h2>
        <div className='space-y-4 text-justify leading-relaxed text-gray-600'>
          <p>
            The Department of Civil Engineering at the European University of
            Bangladesh is committed to providing students with a robust,
            hands-on learning experience. Our state-of-the-art laboratories are
            the cornerstone of this commitment, offering a practical dimension
            to theoretical concepts. These facilities are equipped with modern
            instruments and software, enabling students to test, analyze, and
            understand the fundamental principles of civil engineering. From
            assessing environmental impacts and testing material strength to
            modeling complex structures and managing transportation systems, our
            labs prepare students to tackle real-world challenges, fostering
            innovation and ensuring they are well-prepared for successful
            careers in the diverse fields of civil engineering.
          </p>
        </div>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Environmental Engineering Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Environmental Engineering Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Environmental Engineering Lab pic 2.jpg'
              alt='Environmental Engineering Laboratory with beakers and testing equipment'
            />
            <FullScreenImage
              src='/images/programs/civil/lab/Environmental Engineering Lab.jpg'
              alt='Environmental Engineering Laboratory with beakers and testing equipment'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Environmental Engineering Laboratory at the Department of Civil
          Engineering, European University of Bangladesh, plays a crucial role
          in enhancing knowledge and practical applications in environmental
          engineering. This state-of-the-art facility offers students hands-on
          experience in assessing and solving environmental issues, with a focus
          on water quality and treatment. Outfitted with advanced equipment, the
          lab facilitates the analysis of various water and wastewater
          parameters, such as pH levels, total dissolved solids, biochemical
          oxygen demand (BOD), chemical oxygen demand (COD), and turbidity.
          Through experimental work, students gain the ability to assess water
          treatment efficiency and explore pollution control strategies. Serving
          as an essential resource for undergraduate students, the laboratory
          promotes research and innovation in environmental sustainability and
          public health preservation.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          BOD Meter, BOD incubator, COD Reactor, COD Meter, pH Meter,
          TDS/Conductivity Meter, Digital Balance Machine, Turbidity Meter.
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Transportation Engineering Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Transportation Engineering Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Transportation Engineering Lab.jpg'
              alt='Transportation Engineering equipment like Marshall Stability tester'
            />
            <FullScreenImage
              src='/images/programs/civil/lab/Transportation Engineering Lab pic 2.jpg'
              alt='Transportation Engineering equipment like Marshall Stability tester'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Transportation Engineering Laboratory at the Department of Civil
          Engineering, European University of Bangladesh, is dedicated to
          enhancing students&apos; understanding of transportation systems and
          infrastructure. This lab provides hands-on experience in analyzing and
          designing roadways, pavements, and traffic management systems.
          Equipped with modern testing instruments, it enables the assessment of
          pavement materials, including bitumen, aggregates, and asphalt
          mixtures, ensuring quality and durability. Students conduct
          experiments on key parameters such as Marshall stability, penetration,
          softening point, and viscosity to evaluate material performance. The
          lab also facilitates research on traffic flow, road safety, and
          transportation planning, helping students develop practical skills in
          solving real-world transportation challenges. By integrating
          theoretical knowledge with experimental analysis, the Transportation
          Engineering Lab plays a vital role in fostering innovation and
          sustainable development in the field of transportation engineering,
          preparing students for careers in infrastructure planning, highway
          design, and traffic management.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Marshall / CBR Testing Machine, Universal Testing Machine (UTM),
          Aggregate Impact Testing Machine, Los Angeles Abrasion Testing
          Machine, Thickness Gauge, Elongation Gauge, Temping Rods, Sieve Sets,
          Pycnometer, Penetration Testing Machine, Ring and Ball Apparatus,
          Cleveland Open Cup Apparatus.
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Open Channel Flow Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Open Channel Flow Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Open Channel Flow lab.jpg'
              alt='Tilting flume for open channel flow experiments'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Open Channel Flow Laboratory at the Department of Civil
          Engineering, European University of Bangladesh, is designed to enhance
          students&apos; understanding of open channel hydraulics and flow
          dynamics. This lab provides hands-on experience in analyzing water
          flow behavior in open channels, such as rivers, canals, and drainage
          systems. Equipped with modern hydraulic apparatus, including flumes
          and flow measurement devices, students conduct experiments on critical
          flow parameters such as velocity, discharge, energy losses, and
          hydraulic jumps. The lab allows students to study flow profiles,
          sediment transport, and channel stability, which are essential for
          designing efficient water conveyance systems. By bridging theoretical
          concepts with practical applications, this laboratory plays a vital
          role in developing students&apos; problem-solving skills in hydraulic
          engineering. It supports research and innovation in water resource
          management, flood control, and sustainable hydraulic infrastructure,
          preparing students for careers in water engineering and environmental
          management.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Tilting Flume, Broad Crested Weir, Sluice Gate, Sharp Crested Weir,
          Parshall Flume, Venturi Flume, Cutthroat Flume, Measuring tap.
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Fluid Mechanics Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Fluid Mechanics Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Fluid Mechanics lab.jpeg'
              alt='Fluid mechanics apparatus showing pipe friction'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Fluid Mechanics Laboratory at the Department of Civil Engineering,
          European University of Bangladesh, provides students with practical
          knowledge of fluid behavior and hydraulic principles. This lab is
          equipped with modern instruments to conduct experiments related to
          fluid properties, flow measurement, pressure distribution, and energy
          losses in pipes and open channels. Students gain hands-on experience
          in analyzing fluid flow characteristics, verifying fundamental fluid
          mechanics theories, and understanding real-world applications in
          hydraulic engineering. Key experiments include Bernoulli&apos;s
          theorem, flow through orifices, pipe friction, and venturi meter
          applications. The lab plays a crucial role in bridging theoretical
          concepts with practical understanding, enabling students to develop
          problem-solving skills essential for designing efficient water
          distribution and drainage systems. By fostering research and
          innovation in fluid dynamics and hydraulic structures, the Fluid
          Mechanics Lab prepares students for careers in civil engineering
          fields such as water resource management, transportation, and
          environmental engineering.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Bernoulli&apos;s Apparatus, Center of Pressure, Orifice, Mouthpiece,
          V-notch, Fluid friction in pipe, Head loss due to Pipe fittings.
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Soil Mechanics Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Soil Mechanics Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Soil Mechanics Lab.jpg'
              alt='Soil mechanics testing equipment like sieves and hydrometers'
            />
            <FullScreenImage
              src='/images/programs/civil/lab/Soil Mechanics lab pic 2.jpg'
              alt='Soil mechanics testing equipment like sieves and hydrometers'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Soil Mechanics Laboratory at the Department of Civil Engineering,
          European University of Bangladesh, provides students with hands-on
          experience in analyzing soil properties essential for geotechnical
          engineering. This lab is equipped with modern testing instruments to
          evaluate soil characteristics such as grain size distribution,
          moisture content, shear strength, permeability, and compaction
          properties. Students conduct key experiments, including Atterberg
          limits, standard and modified proctor tests, direct shear tests, and
          consolidation tests, to assess soil behavior under different loading
          conditions. By applying theoretical knowledge to practical scenarios,
          students gain insights into soil stability, foundation design, and
          slope protection techniques. The lab plays a vital role in fostering
          research and innovation in geotechnical engineering, supporting the
          development of safe and sustainable infrastructure. Through
          experimental analysis and technical training, the Soil Mechanics La
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Pycnometer, Funnel, Thermometer, Pipette, Casagrande Apparatus, ASTM
          Sieve (#4, #8, #16, #30, #40, #50, #100, #200), Pan, Spoon,
          Sedimentation Cylinder, Hydrometer, Porcelain Dish, Wash Bottle,
          Drying Oven, Mold 6 inch & 4 inch, Temping Rod, Standard Proctor
          Extruder, Balance (Kg), Spatula, Filter Paper, Wooden Hammer
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Engineering Materials Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Engineering Materials Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Engineering Materials Lab.jpeg'
              alt='Concrete mixture machine and cube molds'
            />
            <FullScreenImage
              src='/images/programs/civil/lab/Engineering Materials Lab pic 2.jpeg'
              alt='Concrete mixture machine and cube molds'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Engineering Materials Laboratory at the Department of Civil
          Engineering, European University of Bangladesh, provides students with
          hands-on experience in testing and analyzing construction materials.
          This lab is equipped with modern instruments to assess the properties
          and performance of materials such as concrete, steel, timber, bricks,
          and aggregates. Key experiments include compressive strength tests,
          tensile strength tests, slump tests, and impact resistance evaluations
          to determine material durability, workability, and structural
          integrity. Students learn to apply theoretical knowledge to real-world
          scenarios, ensuring the selection of appropriate materials for safe
          and sustainable construction. The lab plays a crucial role in
          fostering research and innovation in material science, supporting the
          development of high-quality infrastructure. By integrating practical
          testing with engineering principles, the Engineering Materials Lab
          prepares students for careers in structural engineering, construction
          management, and material quality control, contributing to the
          advancement of civil engineering practices.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Universal Testing Machine (UTM), Concrete Mixture Machine, Electric
          Oven, Cube Mold, Mechanical Sieve Shaker, Los Angeles Machine,
          Weighing Machine, Cylinder Mold, Cube Mold, Specific Gravity test
          apparatus, Slump Cone Set, Unit Weight Mold, Coarse Aggregate Sieve
          Set, Fine Aggregate Sieve Set, Hammer (Ball Pin), Vicat Apparatus,
          Conical Ring with Base Plate, Tamping Rod, Pliers, Thermometer,
          Digital Slide Calipers
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Structural Mechanics Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Structural Mechanics Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='grid gap-2 p-2 lg:grid-cols-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Structural Mechanics lab.jpeg'
              alt='Structural mechanics apparatus for testing beam bending and column buckling'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
            <FullScreenImage
              src='/images/programs/civil/lab/Structural Mechanics lab pic 2.jpeg'
              alt='Structural mechanics apparatus for testing beam bending and column buckling'
              width={800}
              height={400}
              className='h-auto w-full rounded-md object-cover'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Structural Mechanics Laboratory at the Department of Civil
          Engineering, European University of Bangladesh, provides students with
          hands-on experience in understanding the behavior of structural
          elements under various loading conditions. This lab is equipped with
          modern testing apparatus to analyze the strength, stability, and
          deformation of materials and structural components. Students conduct
          key experiments on beam bending, column buckling, torsion, shear
          force, and deflection to study stress-strain relationships and
          load-bearing capacities. Through practical applications, they gain
          insights into fundamental engineering principles, enabling them to
          design safe and efficient structures. The lab plays a vital role in
          bridging theoretical knowledge with real-world engineering challenges,
          fostering research and innovation in structural analysis. By
          developing problem-solving skills and technical expertise, the
          Structural Mechanics Lab prepares students for careers in structural
          engineering, bridge design, and infrastructure development, ensuring
          they contribute effectively to the construction of resilient and
          sustainable structures.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Equipment:
        </h4>
        <p className='text-sm text-gray-600'>
          Johnson&apos;s shear tools, Rockwell hardness testing machine,
          Buckling test apparatus, Compressometer, Slide Caliper, Vernier
          Caliper, extensometer
        </p>
      </div>

      <Separator className='my-4 lg:my-8' />

      {/* Computer Laboratory */}
      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-foreground'>
          Computer Laboratory
        </h3>
        <Card className='mb-4 shadow-lg'>
          <CardContent className='p-2'>
            <FullScreenImage
              src='/images/programs/civil/lab/Computer lab room no 329.jpg'
              alt='Computer lab with students working on engineering software'
            />
          </CardContent>
        </Card>
        <p className='mb-4 text-justify text-sm leading-relaxed text-gray-600'>
          The Computer Laboratory at the Department of Civil Engineering,
          European University of Bangladesh, is a state-of-the-art facility
          designed to enhance students&apos; technical proficiency in civil
          engineering applications. This lab is equipped with high-performance
          computers and industry-standard software used for structural analysis,
          geotechnical studies, transportation planning, hydraulic modeling, and
          construction management. Students gain hands-on experience with
          essential civil engineering software such as AutoCAD, STAAD.Pro,
          ETABS, SAP2000, Revit, Plaxis, ArcGIS, and Primavera. Through
          practical training, they develop computational skills necessary for
          designing, analyzing, and simulating real-world engineering projects.
          The lab plays a crucial role in bridging theoretical concepts with
          digital applications, fostering innovation and efficiency in modern
          engineering practices. By integrating technology with engineering
          education, the Computer Lab prepares students for careers in
          structural design, project management, and infrastructure development,
          ensuring they stay ahead in the rapidly evolving field of civil
          engineering.
        </p>
        <h4 className='mb-2 text-base font-medium text-foreground'>
          Software:
        </h4>
        <p className='text-sm text-gray-600'>
          AutoCAD, STAAD.Pro, ETABS, SAP2000, Revit, Plaxis, ArcGIS, Primavera
          and Microsoft Office.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default Page;
