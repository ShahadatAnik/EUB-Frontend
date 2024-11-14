import data from '@/lib/data.json';

import LatestPosts from '@/components/latest-posts';
import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';
import { Separator } from '@/components/ui/separator';
import AlbumSlider from '@/components/album-slider';
import PdfViewer from '@/components/pdf-viewer';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = data.find((item) => item.id.toString() === slug);
  const date = new Date();

  return (
    <div>
      <PageHeader title={'Details'} image='/images/bg-2.jpg' />
      <PageContainer className='pb-40'>
        <div className='flex flex-col lg:flex-row gap-8 '>
          <div className='flex-1'>
            <h2 className='text-xl lg:text-3xl font-medium font-poppins'>
              {post?.title}
            </h2>
            <div className='mt-4'>
              <p>{date.toLocaleDateString()}</p>
            </div>
            <Separator className='mt-3 mb-6' />

            <div>
              <AlbumSlider />
              <PdfViewer />
              <p className='mt-4'>{post?.description}</p>
            </div>
          </div>

          <div className='lg:border-l lg:pl-8 flex-[0_0_340px] h-fit'>
            <LatestPosts />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
