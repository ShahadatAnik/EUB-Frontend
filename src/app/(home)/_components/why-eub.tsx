import React from 'react';

import { Factory, Globe, GraduationCap, Rocket } from 'lucide-react';

const data = [
  {
    description: 'Real industry connections. Real world experiences.',
    icon: Factory,
  },
  {
    description: 'Industry-class facilities, world-class learning.',
    icon: Rocket,
  },
  {
    description: 'Connecting people and technology for a better world.',
    icon: Globe,
  },
  {
    description: 'Proudly creative, constantly innovative.',
    icon: GraduationCap,
  },
];

const WhyEUB = () => {
  return (
    <section className='py-12 lg:py-16 2xl:py-20'>
      <div className='container'>
        <h2 className=' text-2xl 2xl:text-4xl font-medium text-primary mb-8 text-center font-poppins'>
          Why EUB?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center space-y-4 text-center'
            >
              <item.icon className='size-16 lg:size-20 text-primary' />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEUB;
