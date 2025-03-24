import React from 'react';
import ContentWrapper from '../content-wrapper';
import Image from 'next/image';
import MessageFromChairman from '@/app/programs/_components/message-from-chairman';

const Chairman = () => {
  return (
    <MessageFromChairman departmentName='THM'>
      <p className='leading-relaxed'>
        Welcome to the Department of Tourism and Hospitality Management (THM) at
        the European University of Bangladesh (EUB). It is an honor to lead a
        department dedicated to shaping the next generation of leaders in the
        global tourism and hospitality sectors. Tourism and hospitality is a
        dynamic industry driving cultural exchange, economic growth, and
        sustainability. Our program is designed to provide a balance of
        theoretical knowledge and hands-on experience, preparing students for a
        wide range of career opportunities in hotel management, event planning,
        travel services, aviation industry, and destination development.
        <br />
        <br />
        Bangladesh, with its rich heritage and natural beauty, holds immense
        tourism potential. At the THM department, we strive to prepare students
        to harness these opportunities through a curriculum emphasizing
        innovation, sustainability, and service excellence. Our faculty members
        bring extensive academic as well as industry experience and provide
        students with internships, research opportunities, and real-world
        exposure. Advanced learning environments further enhance the practical
        skills of our students I invite you to explore our Tourism and
        Hospitality Management program and shape your future in this dynamic
        industry. Together, we can make a meaningful impact.
      </p>
    </MessageFromChairman>
  );
  return (
    <ContentWrapper title='Message from the Chairman' className='py-4'>
      <div className='flex justify-center mb-4'>
        <Image
          src={'/images/chairmans/thm.jpg'}
          alt='Shakina Sultana Pomi'
          width={200}
          height={200}
        />
      </div>
      <p className='leading-relaxed'>
        Welcome to the Department of Tourism and Hospitality Management (THM) at
        the European University of Bangladesh (EUB). It is an honor to lead a
        department dedicated to shaping the next generation of leaders in the
        global tourism and hospitality sectors. Tourism and hospitality is a
        dynamic industry driving cultural exchange, economic growth, and
        sustainability. Our program is designed to provide a balance of
        theoretical knowledge and hands-on experience, preparing students for a
        wide range of career opportunities in hotel management, event planning,
        travel services, aviation industry, and destination development.
        <br />
        <br />
        Bangladesh, with its rich heritage and natural beauty, holds immense
        tourism potential. At the THM department, we strive to prepare students
        to harness these opportunities through a curriculum emphasizing
        innovation, sustainability, and service excellence. Our faculty members
        bring extensive academic as well as industry experience and provide
        students with internships, research opportunities, and real-world
        exposure. Advanced learning environments further enhance the practical
        skills of our students I invite you to explore our Tourism and
        Hospitality Management program and shape your future in this dynamic
        industry. Together, we can make a meaningful impact.
        <br />
        <br />
        Warm regards,
        <br />
        Shakina Sultana Pomi
        <br />
        Associate Professor and Chairman Department of Tourism and Hospitality
        Management
        <br />
        European University of Bangladesh
      </p>
    </ContentWrapper>
  );
};

export default Chairman;
