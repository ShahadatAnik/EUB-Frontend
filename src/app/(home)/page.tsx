import Hero from '@/app/(home)/_components/hero';
import Notice from '@/app/(home)/_components/notice';
import { generateMetaData } from '@/lib/utils';
import { getOffers } from '@/server/get';

export const metadata = generateMetaData({
  title: 'European University of Bangladesh',
  description: 'The home page of the European University of Bangladesh',
});

export default async function Page() {
  const offers = await getOffers();

  return (
    <>
      <Hero offers={offers} />
      <Notice />
    </>
  );
}
