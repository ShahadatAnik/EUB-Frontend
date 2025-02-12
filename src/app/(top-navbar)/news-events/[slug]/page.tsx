import { formatDate } from 'date-fns';

import LatestPosts from '@/components/latest-posts';
import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';
import { Separator } from '@/components/ui/separator';
import AlbumSlider from '@/components/album-slider';
import { getNewsById } from '@/server/get';

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
        <div className='flex flex-col lg:flex-row gap-8 '>
          <div className='flex-1'>
            <h2 className='text-xl lg:text-3xl font-medium font-poppins'>
              {data?.title}
            </h2>
            <div className='mt-4'>
              <p>
                {formatDate(new Date(data?.published_date), 'dd MMM, yyyy')}
              </p>
            </div>
            <Separator className='mt-3 mb-6' />

            <div>
              <AlbumSlider
                images={data?.carousel.map((item) => ({
                  original: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.label}`,
                }))}
              />
              <p className='mt-4'>{data?.description}</p>
            </div>
          </div>

          <div className='lg:border-l lg:pl-8 flex-[0_0_340px] h-fit'>
            <LatestPosts department={data?.department_name} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
