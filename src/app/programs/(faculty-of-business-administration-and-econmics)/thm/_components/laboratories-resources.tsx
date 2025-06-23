import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
  return (
    <ContentWrapper title='Laboratories and Resources' className='space-y-8'>
      <div>
        <h4 className='text-xl font-semibold'>HOUSEKEEPING LAB</h4>
        <div className='mt-2'>
          <div className='relative float-right ml-6 aspect-square w-[300px]'>
            <Image
              fill
              className='object-cover object-center'
              src={'/images/programs/thm/lab/Housekeeping.jpg'}
              alt='placeholder'
            />
          </div>

          <p className='text-justify'>
            A &quot;housekeeping lab&quot; in a tourism department is a
            dedicated space where students studying tourism and hospitality
            management can practice and develop the essential skills required
            for maintaining cleanliness and order in hotels and other
            accommodation settings. This includes hands-on training in tasks
            such as bed making, room cleaning, laundry management, and overall
            room preparation. The lab provides a practical learning environment,
            allowing students to gain real-world experience in housekeeping
            operations, which is a critical component of the hospitality
            industry.
            <br />
            <br />
            <strong>Equipment:</strong>
            <br />
            One single bed, mattress, pillow, bed sheet, bed cover, duvet cover,
            towel, side table, cabinet, table, lamp, cleaning agent, decoration
            piece etc.
          </p>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>CULINARY LAB</h4>
        <div className='mt-2 flex gap-6'>
          <Image
            height={400}
            width={300}
            className='object-cover object-top'
            src={'/images/programs/thm/lab/Culinary 2.jpg'}
            alt='placeholder'
          />

          <div className='flex-1'>
            <p className='text-justify'>
              A culinary lab in a tourism program is a specialized kitchen where
              tourism and hospitality management students develop cooking
              skills, learn to prepare local and international dishes and
              practice food presentation. This hands-on training is essential
              for understanding and promoting culinary tourism, equipping
              students with practical knowledge for careers in the hospitality
              industry. It serves as a learning space where food preparation is
              emphasized as a key element of the tourist experience.
              <br />
              <br />
              <strong>Equipment:</strong>
              <br />
              cutlery sets, silverware, glassware, burner, cylinder, napkins,
              table set-up, decoration items etc.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>Front Office Lab</h4>
        <div className='mt-2'>
          <p className='text-justify'>
            A Front Office Lab is a simulated or real training environment
            designed to teach students and professionals about front office
            operations in the hospitality and tourism industry. It replicates
            the actual work setting of hotel reception areas, travel agencies,
            or customer service desks, allowing trainees to practice real-world
            tasks like guest handling, reservations, check-ins, check-outs, and
            complaint resolution. It is important Hands-on Training: It provides
            practical experience in handling guests, reservations, billing, and
            communication, which are essential for tourism and hospitality
            services.it is important for professional skill development.
            <br />
            <br />
            <strong>Equipment:</strong>
            <br />
            Front desk, decoration items, guest reservation-related items etc.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LaboratoriesResources;
