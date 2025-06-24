import React from 'react';

import Title from '@/components/title';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <div>
          <Title title='Vision' />
          <p>
            To become a transformative center of excellence that nurtures
            innovation, equity, and global relevance, empowering students to
            drive sustainable development, address local challenges, and
            contribute meaningfully to the global knowledge economy. We envision
            fostering a community where access to world-class education is
            inclusive and affordable, bridging the gap between traditional
            learning and the demands of a rapidly evolving world.
            <br />
            Through cutting-edge research, interdisciplinary collaboration, and
            a deep commitment to social responsibility, we aim to produce
            ethically grounded, globally competent leaders and innovators who
            uplift their communities. By integrating technology,
            entrepreneurship, and cultural heritage, the university will serve
            as a catalyst for economic growth, environmental stewardship, and
            social progress in Bangladesh and beyond.
          </p>
        </div>
        <div>
          <Title title='Mission' />
          <p>
            To provide inclusive, affordable, and high-quality education that
            empowers students to achieve their fullest potential while
            addressing the unique challenges of a developing nation. We are
            committed to:
          </p>
          <ul className='mt-2 list-inside list-decimal space-y-1'>
            <li>
              Delivering a dynamic curriculum that blends global knowledge with
              local relevance, equipping graduates with the skills and mindset
              needed for sustainable development.
            </li>
            <li>
              Fostering a culture of innovation, research, and entrepreneurship
              to drive economic progress, technological advancement, and
              societal transformation.
            </li>
            <li>
              Ensuring equitable access to education for students from diverse
              socio-economic backgrounds, particularly those from underserved
              communities.
            </li>
            <li>
              Promoting ethical leadership, critical thinking, and community
              engagement to create socially responsible citizens.
            </li>
            <li>
              Embracing technology and interdisciplinary collaboration to solve
              pressing local and global challenges, while preserving and
              celebrating the cultural heritage of Bangladesh.
            </li>
            <li>
              Through these efforts, we aim to become a beacon of hope and
              progress, producing graduates who are agents of change in their
              communities and the world.
            </li>
          </ul>
        </div>
        <div className='space-y-4'>
          <Title title='Strategy' />
          <div>
            <h4 className='text-lg font-semibold'>
              Core Values Instilled in EUB Graduates
            </h4>
            <ul className='mt-1 list-inside list-decimal space-y-1'>
              <li>
                Treating all individuals equally and without discrimination,
                while fostering respect, tolerance, and non-violent conflict
                resolution.
              </li>
              <li>
                Upholding transparency, accountability, and ethical behavior in
                all personal, social, and professional actions.
              </li>
              <li>
                Striving for truth, excellence, and innovation while valuing and
                celebrating the success of others.
              </li>
              <li>
                Acting responsibly with material, energy, and human resources,
                considering environmental impacts and sustainable development.
              </li>
              <li>
                Valuing traditional cultures and knowledge as integral parts of
                society and national identity. e
              </li>
              <li>
                Recognizing that material gains should align with ethical,
                legal, and societal responsibilities.
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold'>
              Skills, Knowledge, and Competencies of EUB Graduates
            </h4>
            <ul className='mt-1 list-inside list-decimal space-y-1'>
              <li>
                Proficient in listening, speaking, reading, writing, and
                non-verbal communication to share and receive complex ideas
                effectively.
              </li>
              <li>
                Skills to analyze information, use logical reasoning, and
                develop holistic solutions to complex problems.
              </li>
              <li>
                Competence in utilizing modern technology for communication,
                research, and analysis, with the ability to gather and interpret
                diverse information sources.
              </li>
              <li>
                Equipped with specific skills for national workforce needs,
                ethical workplace behavior, and adaptability to evolving
                careers.
              </li>
              <li>
                Appreciation for diversity, gender equity, and cultural
                heritage, with the ability to function effectively in
                multicultural and global environments.
              </li>
              <li>
                Knowledge of leadership, conflict resolution, and management
                principles to work collaboratively and lead initiatives
                successfully.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
