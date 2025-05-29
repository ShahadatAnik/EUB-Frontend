import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <>
      <div className='flex'>
        <div className='h-[400px] aspect-square relative'>
          <Image fill src='/placeholder.svg' alt='placeholder' />
        </div>

        <div className='flex-1 p-8 '>
          <h4 className='text-2xl font-semibold'>Director</h4>
          <p className='mt-2 text-muted-foreground'>
            Prof. Dr. Md. Arifur Rahman
          </p>

          <p className='mt-2 text-muted-foreground'>
            Master of Arts in Diplomacy and Administration of International
            Organizations, University of Paris, France (1994)
          </p>
          <p className='mt-2 text-muted-foreground'>
            MBBS, Rajshahi Medical College, Rajshahi, Bangladesh (1985)
          </p>

          <ul className='mt-4 space-y-1'>
            <li>
              <span className='font-semibold'>Email :</span>{' '}
              <span className='text-muted-foreground'>arifur.rahman@eub.</span>
            </li>
            <li>
              <span className='font-semibold'>Phone :</span>{' '}
              <span className='text-muted-foreground'>+880 2 555 5555</span>
            </li>

            <li>
              <span className='font-semibold'>Office :</span>{' '}
              <span className='text-muted-foreground'>
                2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className='text-2xl font-semibold'>Short Biography</h4>
        <p className='mt-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde rem
          libero a quibusdam veritatis eveniet minus optio. Officiis voluptates,
          dolores sunt est dolorem dolore nemo quas nobis impedit enim ipsa rem
          quia. Cupiditate magni voluptatem ratione repudiandae corporis,
          mollitia iusto tenetur quia. Aspernatur, consequuntur repudiandae! Est
          sequi alias vel! Consectetur accusantium, delectus temporibus facilis
          dolorem laboriosam,
        </p>
      </div>
      <div>
        <h4 className='text-2xl font-semibold'>Office Contact</h4>
        <p className='mt-1'>
          <span>European University of Bangladesh</span>
          <br />
          <span>2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh</span>\
          <br />
          <span>Phone: +88 09604-848-848</span>
        </p>
      </div>
    </>
  );
};

export default Content;
