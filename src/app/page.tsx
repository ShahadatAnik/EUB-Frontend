import Hero from '@/components/hero';
import Layout from '@/components/layout';
import Notice from '@/components/notice';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Notice />
    </Layout>
  );
}
