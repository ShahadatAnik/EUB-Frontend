import React from 'react';
import ContentWrapper from './content-wrapper';
import Image from 'next/image';

const AlumniIndustry = () => {
  return (
    <ContentWrapper title='Alumni and Industry' className='space-y-12 lg:p-8'>
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <Image
          height={300}
          width={300}
          className='object-contain'
          src={'/images/programs/thm/alumni/1. Abir.jpg'}
          alt='Abir Hasan'
        />

        <div>
          <h4 className='text-2xl font-semibold'>Abir Hasan</h4>
          <h6 className='mt-1 text-muted-foreground'>
            Sr. Executive Sales & Marketing (Corporates), Grand Palace Hotel &
            Resorts
          </h6>
          <p className='mt-2 text-justify italic'>
            Abir Hasan, a proud graduate of the Tourism and Hospitality
            Management Department at the European University of Bangladesh, is
            making remarkable strides in the hospitality industry. He is
            currently serving as a Senior Executive in the Sales and Marketing
            Department at Grand Palace Hotel and Resorts. His success highlights
            the university’s dedication to nurturing skilled professionals who
            excel in the dynamic world of tourism and hospitality.
          </p>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
        <div className='py-4'>
          <h4 className='text-2xl font-semibold'>Sahed Al Zubaer</h4>
          <h6 className='mt-1 text-muted-foreground'>
            DCDP, Golden Tulip - The Grandmark Dhaka
          </h6>
          <p className='mt-2 text-justify italic'>
            Sahed Al Zubaer is a passionate hospitality professional with a
            degree in Tourism and Hospitality Management from the European
            University of Bangladesh. Currently serving as a Demi Chef de Partie
            (DCDP) at Golden Tulip the Grandmark Dhaka, he brings expertise in
            culinary excellence and a dedication to delivering exceptional
            dining experiences.
          </p>
        </div>
        <Image
          height={300}
          width={300}
          className='object-contain'
          src={'/images/programs/thm/alumni/2. Shaheed.jpg'}
          alt='Sahed Al Zubaer'
        />
      </div>
    </ContentWrapper>
  );
};

export default AlumniIndustry;
