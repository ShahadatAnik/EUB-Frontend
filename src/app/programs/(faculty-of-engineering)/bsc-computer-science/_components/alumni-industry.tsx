import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const AlumniIndustry = () => {
  return (
    <ContentWrapper title='Alumni and Industry'>
      <div className='relative h-[400px] w-full'>
        <Image
          className='object-contain'
          fill
          src={'/person-placeholder.jpg'}
          alt='Alumni'
        />
      </div>

      <div className='py-4 text-center'>
        <h4 className='text-2xl font-semibold'>Name</h4>
        <h6 className='mt-1 text-muted-foreground'>
          Designation, Company Name
        </h6>
        <p className='mt-2 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque
          tempore aliquid cupiditate vitae error sapiente amet magni qui
          similique ad nisi expedita non repellendus molestias delectus labore
          minus illum aliquam, sequi laborum. Dolorum consectetur corrupti nulla
          eius magni, iure hic vel in illum reiciendis, unde fugiat. Temporibus,
          magni quaerat sit, inventore fugit dolor ipsum harum soluta corrupti
          nisi vitae adipisci. Veniam veritatis maxime, itaque laudantium odit
          nam autem saepe atque, impedit aut ad excepturi ipsam nulla, provident
          modi iusto reiciendis velit praesentium. Cumque esse saepe, iste
          laudantium temporibus nam alias repellendus eius voluptatum id
          eveniet, corrupti possimus error amet ipsum exercitationem rerum
          fugiat sit dolorum deserunt maiores quo a voluptatem expedita.
          Perspiciatis est incidunt repudiandae excepturi dicta dignissimos,
          pariatur eaque explicabo necessitatibus dolorum doloribus ducimus
          facilis architecto officia minus, itaque iusto similique tempore nulla
          rem, possimus et exercitationem fugit. In autem voluptas animi,
          consequatur modi esse iure laboriosam? Tempore nihil sed saepe ut cum
          magni accusantium incidunt! Sit quos nostrum aliquam, deserunt id
          sapiente praesentium dolore in qui quisquam sunt ex corporis atque
          voluptatibus provident quis officia. Officiis, pariatur inventore.
          Voluptatibus dolores vitae est. Veniam qui, quas ab exercitationem
          enim magnam culpa porro ipsum, minus delectus, officia obcaecati optio
          sequi veritatis atque adipisci numquam cumque! Optio, deserunt fuga
          aperiam dolor minus debitis ipsum asperiores voluptatem odit dolorem
          explicabo cum ad quos. Fugiat adipisci voluptates quos atque
          accusantium est a, aspernatur hic fugit ipsum autem impedit
          perspiciatis quia sit mollitia odio, doloribus molestias quisquam
          similique blanditiis magnam tempore necessitatibus? Doloribus, totam
          repellendus accusamus sed blanditiis vero exercitationem facilis
          aperiam in accusantium quia doloremque ullam nisi cumque mollitia
          laborum culpa quasi dolorum beatae quos. Dolorem eius repudiandae
          adipisci nulla nemo ipsam? Pariatur cumque ut adipisci officiis quidem
          dolore praesentium sequi quia maiores. Nam facere quam ex animi
          possimus dolore laudantium corrupti?
        </p>
      </div>
    </ContentWrapper>
  );
};

export default AlumniIndustry;
