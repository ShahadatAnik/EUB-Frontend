import { ILab } from '@/app/(programs)/_config/types';

export const labData: ILab[] = [
  {
    title: 'Electrical Circuits Lab',
    description:
      "The Electrical Circuit Lab course offers hands-on experience in analyzing and building electrical circuits. Students will explore essential principles of electrical engineering, including Ohm's Law, Kirchhoff's Laws, and the behavior of resistors, capacitors, and inductors in both DC and AC circuits. The lab emphasizes practical skills in circuit design, measurement, and troubleshooting using industry-standard tools such as multimeters, oscilloscopes, and power supplies. This course is designed to help students understand the properties of sinusoid, phasor, AC power analysis also. It is conducted to demonstrate knowledge and understanding of the theoretical concepts and their implementation in practical aspects.",
    images: [
      {
        src: '/images/programs/eee/lab/Electrical Circuits Lab.jpg',
        alt: 'Electrical Circuits Lab',
      },
    ],
    equipment:
      'Advance Electrical Circuit Trainer, DC Power Supply, Analog and Digital Oscilloscope, Analog Trainer Board, Digital Watt Meter, Analog Function Generator, Digital Function Generator, Analog Digital Trainer Board, Analog AC Ammeter, Voltmeter, Analog DC Ammeter, Voltmeter, Analog DC u-meter, SPDT Switch Set, Inductor Bank, RF Signal Generator, Digital Multimeter',
    software: 'Multisim, Proteus, OrCAD',
  },
  {
    title: 'Electronics Lab',
    description:
      'The Electronics Lab in the Department of Electrical and Electronic Engineering is a well-equipped facility designed to provide students with hands-on experience in understanding and applying electronic principles. The lab includes modem equipment such as oscilloscopes, signal generators, digital multimeters, and power supplies. The Electronics Lati is divided into two distinct parts: Electronics Lab I and Electronics Lab II. Electronics and Il labs provide hands-on experience with fundamental and advanced electronic circuits. Students explore components like diodes, transistors, FET, MOSFET and operational amplifiers, progressing to complex systems such as filters, oscillators, and digital circults. These labs bridge theoretical concepts with practical applications, enhancing circuit design and problem-solving skills.',
    images: [
      {
        src: '/images/programs/eee/lab/Electronics Lab.jpg',
        alt: 'Electronics Lab',
      },
    ],
    equipment:
      'Multimeters, Digital/Analog Oscilloscopes, Function Generators, Power Supplies, Soldering Stations, Breadboards, Electronic Components, Logic Gates Kits, LCR Meters, Digital Storage Oscilloscopes (DSOs), Analog Digital Trainer Board, DC Power Supply',
    software: 'Multisim, Proteus, OrCAD',
  },
  {
    title: 'Engineering Drawing and Drafting Lab',
    description:
      'Engineering drawing and drafting labs are vital part of engineering education, providing students with the skills to create precise technical drawings that communicate complex design information effectively. These laboratories allow students to learn the standards and instruments required to produce precise engineering drawings by fusing academic knowledge with real-world application. Engineering drawing is a specialized form of technical drawing used to convey information about objects, structures, or systems. It employs standardized symbols, perspectives, units of measurement, and notation systems to ensure that the drawings are unambiguous and universally understood. Key components of engineering drawings include geometry, dimensions, understanding different view and projections and interpreting technical drawing. The combination of traditional drafting techniques with modern CAD technology ensures the quality of the students to meet the demands of the engineering industry.',
    equipment: 'Drawing Table, T-scale, Set-scale, Protractor, Dividers',
    software: 'AutoCAD, SolidWorks',
  },
  {
    title: 'Electrical Machines-I Lab',
    description:
      'The Electrical Machines- Lab in undergraduate studies provides hands-on experience mainly on transformer and induction motor. Students perform experiments such as open-circuit and short-circuit tests on transformers, load tests, voltage regulation and efficiency analysis of different machines. Induction motors undergo no-load and blocked rotor tests to determine equivalent circuit parameters and silp variation. The lab enharices understanding of machine characteristics, performance, and control techniques. Safety precautions, proper circuit connections, and accurate measurements are emphasized throughout the course. By conducting practical experiments, students bridge the gap between theory and real-world applications, preparing them for industrial and research-oriented careers in electrical engineering.',
    images: [
      {
        src: '/images/programs/eee/lab/Electrical Machines-I Lab.jpg',
        alt: 'Electrical Machines-I Lab',
      },
    ],
    equipment:
      'Basic Electrical Machine Trainer, Variac Transformer, Basic Motor Generator Trainer, Single-phase and three-phase Transformer, Analog Wattmeter, Analog Oscilloscope, Digital Multimeter.',
  },
  {
    title: 'Electrical Machines-II Lab',
    description:
      'The Machine Il Lab focuses on advanced electrical machines, including DC motors, DC generators, universal motors, alternators, and synchronous motors. Experiments on DC machines cover motor and generator characteristics, speed control, and efficiency analysis, while the universal motor is studied for its ability to operate on both AC and DC supplies. Alternators, as synchronous generators, are analyzed for voltage regulation, OC & SC tests, and synchronization, whereas synchronous motors are explored for constant-speed operation, power factor correction, and V-curve analysis. This lab provides hands-on experience in machine operation, performance evaluation, and fault analysis, essential for real-world applications in power systems and electrical engineering',
    images: [
      {
        src: '/images/programs/eee/lab/Electrical Machines-II Lab.jpg',
        alt: 'Electrical Machines-II Lab',
      },
    ],
    equipment:
      'DC Machines (DC Motors & DC Generators), Alternators, Single-Phase Transformer, Synchronous Motors, Universal Motors, Rheostats, Tachometers',
  },
  {
    title: 'Digital Logic Design Lab',
    description:
      'The Digital Logic Design (DLD) Lab focuses on fundamental concepts of digital circuits and their practical applications. Students begin by exploring the characteristics of various logic gates and familiarizing themselves with the digital trainer board and integrated circuits (OCs), The lab emphasizes the implementation of different logic functions using universal gates such as NAND and NOR, reinforcing the concept of gate-level logic design. Additionally, students learn to realize given Boolean functions in both Sum of Productis (SOP) and Product of Sums (POS) forms. Another crucial aspect of the lab is the design and analysis of adders and subtractors, which are essential components of an Arithmetic Logic Unit (ALU). Through hands-on experiments, students construct different types of adders and subtractors, observe their behavior, and gain insights into their significance in digital circult design.',
    images: [
      {
        src: '/images/programs/eee/lab/Digital Logic Design Lab.jpg',
        alt: 'Digital Logic Design Lab',
      },
    ],
    equipment:
      'Digital Logic Trainer System, Integrated Circults (ICs): NOT, AND, OR, NAND, NOR, XOR, XNOR, MUX, DEMUX, Encoder, Decoder, Power Supply',
  },
  {
    title: 'Digital Electronics Lab',
    description:
      'The Digital Electronics Lab provides a hands-on approach to understanding and experimenting with key concepts in digital circuits and systems. This lab covers the practical aspects of integrated Circuits (ICs), semiconductor diodes, and various digital logic families, including TTL, ECL, and CMOS. Students will explore the characteristics and performance metrics such as fan-out, noise margin, propagation delay, and speed-power product through real-world experiments. The lab offers practical experience with memory systems like RAM, ROM, and Flash memory, as well as essential components such as DAC, ADC, IC555 timers, and Charge Coupled Devices (CCD), Students will also gain proficiency in using Programmable Logic Devices (PLDs) for implementing digital circuits and learn about shift registers, counters, and their applications in modern electronic systems. The lab fosters a deeper understanding of digital electronics, providing students with the tools to design and analyze complex digital systems effectively.',
    equipment:
      'Digital Logic Trainer System, Digital Logic IC Trainer, Analog Digital Trainer Board, Basic Electronic and Digital Trainer Board, Motor Controller system Trainer Board, Analog Digital Converter Trainer Board',
    software: 'Proteus',
  },
  {
    title: 'Signal and Systems Lab',
    description:
      'Our Signal and System Lab is intended to supplement the theoretical ideas covered in signals and systems courses. It focuses on applying mathematical tools and software to analyze, process, and manipulate signals-both continuous and discrete. In order to assist students, grasp important ideas like Fourier transforms, Laplace transforms, Z-transforms, convolution, filtering, and system reactions, the lab consists of necessary experiments and simulations. Simulation softwares like MATLAB, Python (NumPy, SciPy, Matplotlib) or other simulation tools for signal processing are used to experience hands-on learning for generating and visualization of analog and digital signals and their various modulation process.',
    equipment: 'Computers, Projector',
    software: 'MATLAB/Simulink, Python (NumPy, SciPy, Matplotlib)',
  },
  {
    title: 'Communication Engineering Lab',
    description:
      'The Communication Engineering Laboratory provides specialized facilities for students and researchers to engage in practical experimentation and research in the field of communication systems, it typically involves hands-on experience with equipment and tools used in the transmission, reception, and processing of signals in various forms, such as analog and digital communication, wireless networks, and data transmission. The lab helps develop skills in designing, analyzing, and troubleshooting communication systems, covering topics like modulation techniques, and network protocols. It serves as a bridge between theoretical knowledge and real-world application in the field of telecommunications',
    images: [
      {
        src: '/images/programs/eee/lab/Communication Engineering Lab.jpg',
        alt: 'Communication Engineering Lab',
      },
    ],
    equipment:
      'Analog Communication (GT300-310, GOTT), Digital Communication (GT145-550 to 560, GOTT), AM Modulator (ETEK ACS-3000-021, FM Modulator (ETEK ACS-3000-04), Digital Oscilloscope (DSO5102P, Hantek), Analog Digital Trainer Board (SB-700, SB-Tech), Function Generator (ETEK FG-2002), DC Power Supply, Analog Oscilloscope',
  },
  {
    title: 'Digital Signal Processing Lab',
    description:
      'The Digital Signal Processing (DSP) Lab provides hands-on experience in analyzing and implementing discrete-time signal processing techniques using MATLAB, with potential applications in Python. Students perform fundamental signal operations, such as generating and manipulating discrete signals (unit step, impulse, sine, cosine) and executing time-shifting, scaling, and folding transformations. Experiments Include linear and circular convolution, discrete-time correlation, and Fourier-based spectral analysis, including Discrete-Time Fourier Transform (DTFT), Discrete Fourier Transform (DFT), and Fast Fourier Transform (FFT). The lab also covers digital filter design, where students implement Finite Impulse Response (FIR) and Infinite Impulse Response (IR) filters to meet practical signal-processing requirements. Additionally, frequency-domain analysis is conducted to examine the spectral characteristics of signals and systems. MATLAB is the primary software used for signal visualization, coding, and simulation, while Python-based alternatives (NumPy, SciPy, Matplotlib) can be explored for advanced algorithmic development. Through these structured experiments, students develop critical analytical skills and computational proficiency for real-world applications in communicationis, embedded systems, and modern DSP technologies.',
    equipment:
      'DSP Kit (DSP TMS320C50), Digital Oscilloscope, Analog Oscilloscope, RF Signal Generator, Computer, Projector',
    software: 'MATLAB/Simulink, Python (NumPy, SciPy, Matplotlib)',
  },
  {
    title: 'Electrical Measurements and Instrumentation Lab',
    description:
      'The Electrical Measurements and Instrumentation Lab is a practical laboratory designed to provide hands-on experience in measuring electrical parameters and understanding various instruments. It focuses on the principles and techniques used to measure electrical quantities such as voltage, current, resistance, power, and energy. It involves the study of various instruments, sensors, and transducers, along with calibration methods and error analysis to ensure precise and accurate measurements in electrical systems. This field ensures accurate data acquisition for electrical and electronic applications. Through experiments, students gain a deeper understanding of measurement principles, Instrument characteristics, and the importance of accuracy and precision in electrical engineering applications.',
    images: [
      {
        src: '/images/programs/eee/lab/Electrical Measurements and Instrumentation Lab.jpg',
        alt: 'Electrical Measurements and Instrumentation Lab',
      },
    ],
    equipment:
      'DC Ammeter (0-50 mA), DC Voltmeter (0-50 V), DC power supply (0-30 V), Variable Resistor, Trainer board, Thermistor, Capacitor, Oscillator',
  },
  {
    title: 'Microprocessor and Interfacing Lab',
    description:
      'Explore our comprehensive laboratory experiments designed for hands-on learning with MDA-8086 Microprocessor Kit. The experiments encompass a broad spectrum of topics, including the 8255 PIO Controller, 8255 PPI, machine code programming, assembly language programming, and arithmetic instructions. Additionally, students will gain practical expertise in interfacing Dot Matrix Displays and working with AVR Microcontrollers. These laboratory sessions are designed to equip students with essential skills in embedded system development and microprocessor-based applications, fostering a comprehensive understanding of modern microprocessor technology.',
    images: [
      {
        src: '/images/programs/eee/lab/Microprocessor and Interfacing Lab.jpg',
        alt: 'Microprocessor and Interfacing Lab',
      },
    ],
    equipment:
      'Microprocessor Kit (MDA-8086), Arduino Programming Platform kit (Set), Computers, DC Power Supply, Analog Trainer Board',
    software: 'MDA-WinIDE8086',
  },
  {
    title: 'Engineering Simulation Lab',
    description:
      'The Engineering Simulation Lab provides students with practical experience in designing, simulating, and analyzing electrical and electronic circuits using industry-standard software. It covers a broad spectrum of topics, including basic circuit analysis, analog and digital circuit design, microcontrollers and embedded systems, power electronics, and PCB layout. Students will model and simulate circuits to verify performance, troubleshoot errors, and optimize designs before hardware implementation, Key areas of focus include operational amplifiers, logic circuits, $DC-DC$ converters, motor controllers, and PCB routing techniques. Through interactive simulations, this lab enhances students analytical and problem-solving skills, bridging the gap between theoretical concepts and real-world applications in electrical and electronic engineering..',
    equipment:
      'Breadboard, AC Voltage Source (311V, 50Hz), Step Down Transformer, Diodes (1N4007), Capacitors, Resistors, LEDs, Operational Amplifiers (LM741, LM3580), Voltage Regulator IC 17805), 555 Timer IC, 4017 Decade Counter IC, Digital Oscilloscope, Multimeter',
  },
  {
    title: 'Control Systems Lab',
    description:
      'Our control systems laboratory provides practical applications of controlling dynamic systems like motors, robots, and other automated processes. Equivalent modules of Analog computer are available as components of control systems. The experiments encompass a broad spectrum of topics, including the open loop and close loop systems, PID controllers, analyzing stability, accuracy, and transient response, feedback systems which can be practically simulated by using MATLAB and Simulink. Additionally, students will gain practical expertise in applying modern control techniques like state space modelling. These laboratory sessions are designed to equip students with essential skills in applying controllers on physical systems like studying of instantaneous power change in grid line using a process control simulator, control of a conveyor system using Close loop System Controller.',
    equipment: 'Computer, Projector',
    software: 'MATLAB/Simulink, Python',
  },
  {
    title: 'Power Electronics Lab',
    description:
      'The Power Electronics Laboratory is an essential facility in the Department of Electrical and Electronic Engineering (EEE), designed to provide hands-on experience with modern power electronic devices and circults. Equipped with advanced experimental setups, this lab enables. students to understand the working principles, configurations, characteristics, and applications of various power electronic components such as SCR, DIAC, TRIAC, IGBT, regulators, inverters and choppers. Through practical experiments, students develop skills in designing and implementing power electronic circuits, preparing them for careers in power systems, industrial automation, renewable energy and electric vehicle technologies, while promoting continuous learning in the evolving field of power electronics.',
    images: [
      {
        src: '/images/programs/eee/lab/Power Electronics Lab.jpg',
        alt: 'Power Electronics Lab',
      },
    ],
    equipment:
      'Power Electronics Kit (ZT- PEL2105), UJT characteristics and oscillator Kit (JB-PE103), DIAC TRIAC Kit (JB-PE106), Buck Boost Kit (JB-PE108), Analog Digital Trainer Board (SB-700), Analogue Digital Circuit Development Board (Syn2613), Digital Watt Meter (SI-DW6060), RF Signal Generator, Digital Oscilloscope, Analog Oscilloscope, AC/DC Power Supply, Analog Trainer Board, Analog Function Generator, Variac Transformer, Digital Multimeter, Analog AC and DC Voltmeter, Analog AC and DC Ammeter, Analog DC μ-meter',
  },
  {
    title: 'VLSI Design Lab',
    description:
      'Explore our comprehensive laboratory experiments designed for hands-on learning with DSCH2 and Microwind software. We have specialized facility where students, researchers, and engineers work on designing, simulating, and testing C-MOS circuits. Our experiments provide practical example of designing complex circuits with multiple transistors on a single chip. DSCH (Digital Schematic) is paired with Microwind, a tool for designing and simulating CMOS circuits at the layout level. Microwind provides a graphical interface for drawing layouts and simulating their behavior.',
    equipment: 'Computer, Projector',
    software: 'Microwind, DSCH2, Python/Google Colab',
  },
  {
    title: 'Shaheed Md. Taufiqul Islam Bhuiya Research Lab',
    description: (
      <>
        The Research Lab of the Department of Electrical and Electronic
        Engineering (EEE) at the European University of Bangladesh (EUB) is a
        dynamic space designed to stimulate innovation, exploration, and
        practical learning. The lab stands as a tribute to the late Md. Taufiqul
        Islam Bhuiya, who tragically passed away during the quota movement in
        July 2024. Equipped with five high-performance computers, the lab
        provides students and faculty members with the necessary tools for
        research, simulation, and advanced data analysis.
        <br />
        <br />
        The lab supports research in areas such as renewable energy, IoT
        applications, biomedical engineering, microprocessor-based systems, and
        embedded technology. Under the guidance of experienced faculty members,
        students engage in hands-on projects that bridge the gap between
        theoretical knowledge and real-world problem-solving.
        <br />
        <br />
        By offering a well-equipped environment for discovery, the EEE Research
        Lab at EUB plays a vital role in nurturing future engineers, encouraging
        creativity, and contributing to technological advancements.
      </>
    ),
    images: [
      {
        src: '/images/programs/eee/lab/Research Lab.jpeg',
        alt: 'Research Lab',
      },
    ],
    equipment: 'Five high-performance computers',
  },
];
