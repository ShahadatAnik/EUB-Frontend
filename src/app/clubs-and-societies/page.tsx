import React from 'react';

import { IClub, IClubAndSociety } from '@/types';

import { getClubs, getEventCalender, getFaculties } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import ClubCard from './_components/club-card';
import Content from './_components/content';
import EventsCalendar from './_components/events-calendar';

export const metadata = generateMetaData({
  pageUrl: '/clubs-and-societies',
  title: 'EUB Student Clubs & Societies | Campus Life at European University',
  description:
    'Explore a wide range of student clubs and societies at EUB. Find groups for your academic, cultural, and extracurricular interests and enrich your campus life.',
  keywords: [
    'EUB student clubs',
    'University clubs in Dhaka',
    'European University of Bangladesh societies',
    'Campus life EUB',
    'Extracurricular activities university',
    'EUB debate club',
    'EUB sports club',
    'Student organizations Bangladesh',
  ],
});

const Page = async () => {
  const data = await getEventCalender();
  const faculties: IClubAndSociety[] = await getFaculties();
  faculties.push({
    label: 'Documents and Forms',
    value: 'Events Calendar',
    content: <EventsCalendar initialData={data} />,
  });

  for (const faculty of faculties) {
    if (faculty.value === 'events-calendar') continue;
    const clubs: IClub[] = await getClubs(faculty.label);

    faculty.clubs = clubs?.map((club) => ({
      title: club.name,
      content: (
        <ClubCard
          key={club.president_name}
          name={club.president_name}
          image={`${club.president_image}` || '/person-placeholder.jpg'}
          designation={club.president_designation}
          phone={club.president_phone}
          email={club.president_email}
          description={club.message}
        />
      ),
    }));
  }
  return (
    <>
      <PageHeader title='Clubs and Societies' />

      <PageContainer>
        <Content data={faculties} />
      </PageContainer>
    </>
  );
};

export default Page;
