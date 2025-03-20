import React from 'react';

import { Factory, GraduationCap, History, MapPin } from 'lucide-react';

const data = [
  {
    description: 'World-Class Education at an Affordable Cost',

    icon: GraduationCap,
  },
  {
    description: 'Flexible Learning for Working Professionals',
    icon: History,
  },
  {
    description: 'Prime Location for Easy Access',
    icon: MapPin,
  },
  {
    description: 'Real Industry Exposure & Career Opportunities',
    icon: Factory,
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
              <item.icon className='stroke-[0.75] size-16 lg:size-20 text-primary' />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEUB;
