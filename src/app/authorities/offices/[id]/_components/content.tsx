import Image from 'next/image';
import React from 'react';
import ListOfOffices from './list-of-offices';
import Employees from './employees';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container flex gap-8'>
        <ListOfOffices />
        <div className='flex-1 space-y-12'>
          <div className='w-full aspect-video relative'>
            <Image src={'/placeholder.svg'} fill alt='EUB Logo' />
          </div>

          <div className='space-y-2'>
            <h1 className='text-4xl font-semibold'>Office of the Registrar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
              rem libero a quibusdam veritatis eveniet minus optio. Officiis
              voluptates, dolores sunt est dolorem dolore nemo quas nobis
              impedit enim ipsa rem quia. Cupiditate magni voluptatem ratione
              repudiandae corporis, mollitia iusto tenetur quia. Aspernatur,
              consequuntur repudiandae! Est sequi alias vel! Consectetur
              accusantium, delectus temporibus facilis dolorem laboriosam,
              similique eum omnis modi, assumenda distinctio. Minima neque in
              similique assumenda est quod ea error esse velit, accusantium
              vitae id quos numquam consectetur beatae autem ullam rem suscipit.
              Nam optio tempore laborum quisquam vero, exercitationem minima
              similique, et numquam odit commodi quo doloribus?
            </p>

            <ul>
              <li>
                <span className='font-semibold'>Email :</span>{' '}
                eub.registrar@my.eub.edu.bd
              </li>
              <li>
                <span className='font-semibold'>Phone :</span> 123456789
              </li>
              <li>
                <span className='font-semibold'>Fax :</span> 123456789
              </li>
              <li>
                <span className='font-semibold'>Website :</span> www.eub.edu.bd
              </li>
              <li>
                <span className='font-semibold'>Address :</span>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li>
                <span className='font-semibold'>Opening Time :</span>
                8:00 am to 5:00 pm
              </li>
            </ul>
          </div>

          <Employees />
        </div>
      </div>
    </div>
  );
};

export default Content;
