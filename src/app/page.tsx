import Hero from '@/components/hero';
import Navbar from '@/components/layout/navbar';
import Notice from '@/components/notice';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Notice />
    </div>
  );
}
