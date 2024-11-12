import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <Link href='/news-portal'>
        <Button size={'lg'}>Go to News Portal</Button>
      </Link>
    </div>
  );
}
