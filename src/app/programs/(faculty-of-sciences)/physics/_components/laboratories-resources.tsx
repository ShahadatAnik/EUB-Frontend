import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
  return (
    <ContentWrapper title='Laboratories and Resources' className='space-y-8'>
      <div>
        <h4 className='text-xl font-semibold'>Physics Laboratory 01</h4>
        <div className='mt-2'>
          <Image
            className='float-right ml-6'
            width={300}
            height={300}
            src={'/placeholder.svg'}
            alt='placeholder'
          />

          <p className='text-justify'>
            Through hands-on experiments in this Physics Lab, students will
            develop a solid understanding of core concepts in mechanics, optics,
            electromagnetism, and materials science. They will acquire practical
            skills in utilizing a range of experimental techniques and
            measurement instruments, effectively bridging theoretical knowledge
            with real-world applications.
            <br />
            <br />
            The lab experience emphasizes precision in measurement,
            comprehensive error analysis, and thoughtful data interpretation.
            Students will also refine their ability to systematically document
            procedures, critically evaluate results, and present their findings
            through clear, well-structured lab reports. These experiences will
            strengthen both their problem-solving capabilities and scientific
            communication skills, laying a strong foundation for advanced
            studies in physics and related disciplines.
          </p>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>Physics Laboratory 02</h4>
        <div className='mt-2'>
          <Image
            className='float-left mr-6'
            width={300}
            height={300}
            src={'/placeholder.svg'}
            alt='placeholder'
          />

          <p className='text-justify'>
            By completing the experiments in this Physics Lab, students will
            build a strong foundation in classical mechanics, electromagnetism,
            materials science, thermodynamics, and optics. This hands-on
            experience not only deepens their understanding of core physics
            concepts but also ignites curiosity and prepares them for advanced
            study and research.
            <br />
            <br />
            Through the application of theoretical knowledge to real-world
            experiments, students will enhance their problem-solving, critical
            thinking, and analytical skills. By designing experiments,
            collecting and analyzing data, and drawing evidence-based
            conclusions, they will transform abstract ideas into concrete
            understanding.
            <br />
            <br />
            In mastering a wide array of laboratory tools and techniques,
            students will gain the technical proficiency needed to tackle
            complex scientific and engineering challenges—ultimately enabling
            meaningful contributions to advancements in physics and technology.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LaboratoriesResources;
