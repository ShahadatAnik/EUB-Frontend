import NoticeBoard from '@/components/notice-board';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <section className='py-12 lg:py-16 2xl:py-20 bg-white'>
      <div className='container space-y-4 lg:space-y-8'>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-gray-100'>
          <div>
            <Image
              width={400}
              height={400}
              src={'/placeholder.svg'}
              alt='placeholder'
            />
          </div>
          <div className='flex-1'>
            <h2 className='text-xl lg:text-3xl font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className='mt-2 lg:mt-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              saepe omnis culpa cumque sed? Reprehenderit ullam rem provident
              aspernatur laudantium quaerat velit odit pariatur quisquam ex?
              Minima nobis voluptas id harum, rerum tempore tempora ex amet ut
              quibusdam dignissimos vero fugiat quia libero quos quod odit
              asperiores modi fuga! Pariatur necessitatibus sed inventore
              tempore dolores dolor itaque totam dolore quia aperiam nesciunt
              voluptatibus expedita, modi eveniet illum. At enim, non, officia
              veniam reprehenderit veritatis animi aliquid odit officiis atque
              explicabo nemo quibusdam magni saepe corrupti suscipit omnis
              repellat eum natus praesentium ipsam. Quis quos perspiciatis illo
              tempora adipisci molestiae cum architecto ab quisquam iusto at,
              reiciendis quibusdam nobis cumque eaque voluptatem ipsa
              exercitationem harum! Consequatur voluptates quisquam excepturi,
              aliquid quo veniam ex a. Delectus sunt expedita libero sed
              provident fuga veritatis magnam consequuntur asperiores deleniti
              voluptas recusandae velit ipsa eius molestiae ab, assumenda
              voluptates dolore quibusdam accusantium nisi! Obcaecati soluta non
              placeat, quam officiis, est id sapiente laboriosam dolorem
              laudantium cupiditate illum quas earum? Nihil similique vitae
              dolores velit quisquam! Provident dolorem laboriosam iusto eaque
              earum ab non! Minima distinctio iure cupiditate accusantium unde
              sed saepe autem cum eligendi magni. Sunt eveniet tempore qui
              veritatis blanditiis porro a numquam facilis?
            </p>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
          <div className='lg:col-span-2 space-y-4  lg:space-y-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  lg:gap-8'>
              <div className='p-4 lg:p-8  rounded-md border border-gray-100'>
                <h2 className='text-xl lg:text-2xl font-semibold'>
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className='mt-1 lg:mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia dolore quam voluptatibus dolor, nobis harum delectus
                  iusto reiciendis consectetur deserunt perferendis sunt
                  cupiditate. Ducimus porro iste tempora! Repellendus,
                  recusandae. Doloremque animi sapiente sunt modi corrupti
                  possimus est, assumenda ea velit. Similique sapiente tenetur
                  nisi laborum ad quo illum asperiores autem!
                </p>
              </div>

              <div className='p-4 lg:p-8  rounded-md border border-gray-100'>
                <h2 className='text-xl lg:text-2xl font-semibold'>
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className='mt-1 lg:mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia dolore quam voluptatibus dolor, nobis harum delectus
                  iusto reiciendis consectetur deserunt perferendis sunt
                  cupiditate. Ducimus porro iste tempora! Repellendus,
                  recusandae. Doloremque animi sapiente sunt modi corrupti
                  possimus est, assumenda ea velit. Similique sapiente tenetur
                  nisi laborum ad quo illum asperiores autem!
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-gray-100'>
              <div>
                <Image
                  width={200}
                  height={200}
                  src={'/placeholder.svg'}
                  alt='placeholder'
                />
              </div>
              <div className='flex-1'>
                <h2 className='text-2xl font-semibold'>
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className='mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia dolore quam voluptatibus dolor, nobis harum delectus
                  iusto reiciendis consectetur deserunt perferendis sunt
                  cupiditate. Ducimus porro iste tempora! Repellendus,
                  recusandae. Doloremque animi sapiente sunt modi corrupti
                  possimus est, assumenda ea velit. Similique sapiente tenetur
                  nisi laborum ad quo illum asperiores autem!
                </p>
              </div>
            </div>
          </div>

          <div>
            <NoticeBoard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
