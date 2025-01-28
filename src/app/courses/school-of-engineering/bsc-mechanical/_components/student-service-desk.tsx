import React from 'react';
import Link from 'next/link';

import ContentWrapper from './content-wrapper';
import { Separator } from '@/components/ui/separator';

const StudentServiceDesk = () => {
  return (
    <ContentWrapper title='Student Service Desk' className='pt-2 space-y-6'>
      <Link
        className='underline text-primary font-medium flex items-center'
        href={'/student-service-desk'}
      >
        Go to Student Service Desk
      </Link>
      <div>
        <h4 className='text-lg font-medium'>Additional Information :</h4>
        <Separator className='mt-1 mb-2' />
        <p className='text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          optio fugit quia ex quas corrupti aliquid provident beatae natus
          similique reprehenderit quo, qui dolore in excepturi quae. Asperiores
          error, voluptatem libero amet ab eaque suscipit beatae rerum placeat
          magnam incidunt temporibus aspernatur fuga iusto, nulla fugit totam
          consectetur veritatis voluptatibus esse dignissimos rem. Minus
          expedita voluptatibus nemo porro nesciunt maxime odio dolore pariatur
          vel assumenda quibusdam sit hic corporis accusamus facilis quisquam
          itaque error labore molestiae rerum optio veniam, ipsam quo et! Est
          possimus, magnam, atque repudiandae sapiente voluptatibus odit rem
          enim aliquid commodi harum voluptas quas praesentium dolorem sint?
        </p>
      </div>
    </ContentWrapper>
  );
};

export default StudentServiceDesk;
