import Hero from '@/app/(home)/_components/hero';
import Notice from '@/app/(home)/_components/notice';
import { generateMetaData } from '@/lib/utils';

export const metadata = generateMetaData({
  title: 'European University of Bangladesh',
  description: 'The home page of the European University of Bangladesh',
});

export default function Home() {
  return (
    <>
      <Hero />
      <Notice />
    </>
  );
}
