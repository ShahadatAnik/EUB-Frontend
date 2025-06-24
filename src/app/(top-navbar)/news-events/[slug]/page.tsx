import { getNewsById } from '@/server/get';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getNewsById(slug);

  return (
    <div>
      <PageHeader
        title={'Details'}
        image={data?.cover_image ? `${data?.cover_image}` : '/images/bg-2.jpg'}
      />
      <PageContainer className='pb-40'>
        <Content data={data} />
      </PageContainer>
    </div>
  );
}
