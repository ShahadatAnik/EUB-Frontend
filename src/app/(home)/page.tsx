import Hero from '@/app/(home)/_components/hero';
import Layout from '@/components/layout';
import Notice from '@/app/(home)/_components/notice';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Notice />
    </Layout>
  );
}
