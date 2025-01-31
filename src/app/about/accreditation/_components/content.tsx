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

        <div className='border p-4 '>
          <div className='max-w-[200px] mx-auto'>
            {['/images/ugc_logo.svg'].map((src, index) => (
              <div key={index} className='relative aspect-square w-full'>
                <Image fill src={src} alt={'Logo'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
