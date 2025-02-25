import Hero from '@/app/(home)/_components/hero';
import { generateMetaData } from '@/lib/utils';
import { getNewsEvents, getOffers } from '@/server/get';
import WhyEUB from './_components/why-eub';
import Courses from './_components/courses';
import NewsEvents from './_components/news-events';
import Gallery from './_components/gallery';

export const metadata = generateMetaData({
  title: 'European University of Bangladesh',
  description: 'The home page of the European University of Bangladesh',
});

export default async function Page() {
  const offers = await getOffers();
  const news_events = await getNewsEvents(6, 1);

  return (
    <>
      <Hero offers={offers} />
      <WhyEUB />
      <Courses />
      <Gallery />
      <NewsEvents {...news_events} />
    </>
  );
}
