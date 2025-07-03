import { ILab } from '@/app/(programs)/_config/types';

export const labData: ILab[] = [
  {
    title: 'Machine Shop',
    description:
      'A machine shop lab is a specialized workspace equipped with tools and machinery for fabricating, modifying, and repairing metal or plastic parts. It typically includes equipment such as lathes, milling machines, drill presses, grinders, and CNC (Computer Numerical Control) machines. The lab is used for hands-on training, prototyping, and manufacturing, emphasizing precision, safety, and technical skills in machining and engineering processes.',
    images: [
      {
        src: '/images/programs/ipe/lab/Machine/Machine shop.jpeg',
        alt: 'Machine Shop',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Machine shop 2.jpeg',
        alt: 'Machine Shop 2',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Lathe machine.jpeg',
        alt: 'Lathe Machine',
        containerClassName: 'lg:col-span-2',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Arc Welding Machine.jpeg',
        alt: 'Arc Welding Machine',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Venturimeter.jpeg',
        alt: 'Venturimeter',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Shaper Machine.jpeg',
        alt: 'Shaper Machine',
        containerClassName: 'lg:col-span-2',
      },
      {
        src: '/images/programs/ipe/lab/Machine/Milling Machine.jpeg',
        alt: 'Milling Machine',
        containerClassName: 'lg:col-span-2',
      },
    ],
    equipment:
      'Arc Welding Machine, Lathe Machine, Venturi meter, Shaper Machine, Milling Machine, Drilling Machine, Roller Conveyor, Grinding Machine, Sand Casting.',
  },
  {
    title: 'Drawing Lab',
    description:
      'An Engineering Drawing Lab is a practical workspace where students and professionals learn and practice the creation of technical drawings, a fundamental skill for engineering design and communication. Equipped with tools like drafting boards, compasses, and CAD (Computer-Aided Design) software, the lab focuses on producing precise, standardized 2D and 3D drawings of mechanical, electrical, or civil structures. These drawings provide detailed information on dimensions, materials, and assembly instructions, which are critical for manufacturing and construction processes. The lab emphasizes skills such as freehand sketching, manual drafting, and digital modeling, preparing individuals for real-world engineering challenges and fostering accuracy, creativity, and technical proficiency.',
    images: [
      {
        src: '/images/programs/ipe/lab/Drawing Lab/Drawing Lab 1.jpeg',
        alt: 'Drawing Lab 1',
      },
      {
        src: '/images/programs/ipe/lab/Drawing Lab/Drawing Lab 2.jpeg',
        alt: 'Drawing Lab 2',
      },
    ],
    equipment: 'T Square, Drawing Table.',
  },
  {
    title: 'Refrigeration & Air Condition Lab',
    description:
      'Refrigeration and Air Conditioning (RAC) encompass systems designed to regulate temperature and humidity for specific purposes. Refrigeration focuses on cooling spaces to preserve food, materials, or other perishables, while air conditioning ensures comfortable indoor environments by controlling both temperature and humidity. These systems rely on key components such as compressors, condensers, evaporators, and refrigerants to absorb and release heat efficiently. RAC technology plays a critical role in various industries, including food storage, healthcare, and residential or commercial comfort, making it indispensable in modern life.',
    images: [
      {
        src: '/images/programs/ipe/lab/refrigeration-lab/JPEG image (2).jpeg',
        alt: 'Automatic Plant Watering System',
        containerClassName: 'lg:col-span-2',
      },
      {
        src: '/images/programs/ipe/lab/refrigeration-lab/3d printer.jpeg',
        alt: '3D Printer',
      },
      {
        src: '/images/programs/ipe/lab/refrigeration-lab/Automatic Electronic Steam Boiler.jpeg',
        alt: 'Automatic Electronic Steam Boiler',
      },

      {
        src: '/images/programs/ipe/lab/refrigeration-lab/Refrigeration.jpeg',
        alt: 'Refrigeration',
        containerClassName: 'lg:col-span-2',
      },
    ],
    equipment:
      'Refrigeration unit, Air Condition unit, 3D Printer, Automatic Electronic Steam Boiler, Automatic Plant Watering System.',
  },
  {
    title: 'Computer Lab',
    description:
      'A Computer Lab is a dedicated space where computer resources and services are provided to a specific community, such as students, researchers, or the general public. Commonly found in public libraries, academic institutions, and other organizations, these labs offer access to hardware, software, and internet connectivity. Users are typically required to adhere to a defined user policy, which outlines acceptable use, time limits, and other guidelines to ensure fair and secure access for all. Computer labs serve as essential hubs for learning, research, and digital productivity.',
    images: [
      {
        src: '/images/programs/ipe/lab/Computer Lab/Computer Lab 1.jpeg',
        alt: 'Computer Lab 1',
      },
      {
        src: '/images/programs/ipe/lab/Computer Lab/Computer Lab 2.jpeg',
        alt: 'Computer Lab 2',
      },
    ],
    equipment: 'Monitor, PC, Mouse, Keyboard, UPS.',
    software: 'Solidworks, AutoCAD, Minitab, MATLAB.',
  },
];
