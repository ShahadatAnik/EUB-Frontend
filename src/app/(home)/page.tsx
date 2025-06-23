import { getHero, getNewsEvents, getOffers } from '@/server/get';

import { generateMetaData } from '@/lib/utils';

import Hero from '@/app/(home)/_components/hero';

import Courses from './_components/courses';
import Gallery from './_components/gallery';
import NewsEvents from './_components/news-events';
import WhyEUB from './_components/why-eub';

export const metadata = generateMetaData({
  title: 'European University of Bangladesh',
  description: 'The home page of the European University of Bangladesh',
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
