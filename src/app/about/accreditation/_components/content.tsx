import Image from 'next/image';
import React from 'react';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quisquam possimus omnis alias, temporibus, minima esse qui dolores
          porro, aliquid voluptatem cupiditate sit consectetur iure aut adipisci
          dolorum? Officia vero ullam aspernatur doloribus placeat facilis ut
          maiores, est cumque temporibus voluptates animi porro accusantium
          recusandae quia omnis totam voluptatum atque. Tempore doloribus,
          exercitationem eius quae itaque suscipit aspernatur voluptatum
          veritatis numquam magni molestias facilis officia, sequi soluta minus
          fugiat inventore?
        </p>

        <div className='border p-10'>
          <div className='grid grid-cols-3  gap-10'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='relative aspect-square w-full'>
                <Image fill src='/placeholder.svg' alt='placeholder' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
