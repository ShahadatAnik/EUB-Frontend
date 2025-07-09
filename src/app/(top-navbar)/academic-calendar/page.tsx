import React from 'react';

import { getAcademicCalender } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import { generateMetaData } from '@/lib/utils';

import Content from './_components/content';

export const metadata = generateMetaData({
  // A clear title specifying the year
  title: 'Academic Calendar 2025 | European University of Bangladesh (EUB)',

  // A description highlighting the key dates and semesters
  description:
    'View the official 2025 academic calendar. Find key dates for admissions, registration, exams, and holidays for the Spring, Summer, and Fall semesters.',

  // Targeted keywords for users searching for academic dates
  keywords: [
    'EUB academic calendar 2025',
    'European University of Bangladesh academic dates',
    'EUB exam schedule 2025',
    'EUB admission deadline 2025',
    'EUB class start date',
    'University academic calendar Dhaka',
    'EUB holiday calendar',
    'EUB registration dates',
    'Spring 2025 academic calendar',
    'Summer 2025 academic calendar',
    'Fall 2025 academic calendar',
  ],

  // The URL of the page
  pageUrl: '/academic-calendar',
});

export default async function Page() {
  const data = await getAcademicCalender();

  return (
    <>
      <PageHeader title='Academic Calendar' />
      <PageContainer>
        <Content initialData={data} />
      </PageContainer>
    </>
  );
}
