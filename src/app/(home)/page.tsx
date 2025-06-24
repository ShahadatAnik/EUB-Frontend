import { getHero, getNewsEvents, getOffers } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Hero from '@/app/(home)/_components/hero';

import Courses from './_components/courses';
import Gallery from './_components/gallery';
import NewsEvents from './_components/news-events';
import WhyEUB from './_components/why-eub';

export const metadata = generateMetaData({
  title:
    'European University of Bangladesh (EUB) | Quality & Affordable Higher Education',
  description:
    'Discover the European University of Bangladesh (EUB), a leading private university in Dhaka offering UGC-approved degrees with European standards. Explore our diverse programs in Engineering, Business, Arts, and more. Admissions Open for Fall 2025!',
  keywords: [
    'European University of Bangladesh',
    'EUB',
    'Best private university in Bangladesh',
    'Top private university in Dhaka',
    'UGC approved university',
    'EUB admission 2025',
    'Affordable university in Bangladesh',
    'Engineering university Dhaka',
    'BBA admission Bangladesh',
    'CSE private university',
    'LLB admission',
    'European standard education',
  ],
  pageUrl: 'https://eub.edu.bd',
});

export default async function Page() {
  const offers = await getOffers();
  const news_events = await getNewsEvents(6, 1);
  const hero = await getHero();

  return (
    <>
      <Hero hero={hero} offers={offers} />
      <WhyEUB />
      <Courses />
      <Gallery />
      <NewsEvents {...news_events} />
    </>
  );
}
