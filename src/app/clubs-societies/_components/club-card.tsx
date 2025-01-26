import Image from 'next/image';
import React from 'react';

const ClubCard: React.FC<{
  image: string;
  designation: string;
  name: string;
  email: string;
  phone: string;
}> = ({ image, designation, name, email, phone }) => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <Image src={image} alt='Person' width={200} height={200} />
        <p className='mt-3 text-xl font-semibold'>{designation}</p>
        <div className='mt-2 space-y-2 text-muted-foreground'>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
        </div>
      </div>

      <p className=' flex-1 text-muted-foreground text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veniam
        velit neque. Quibusdam recusandae eius doloremque nihil cum soluta
        necessitatibus nostrum mollitia aperiam est error iste modi, inventore
        nisi atque voluptas velit illum quaerat tempora amet. Aliquam fugit id
        eos in, quibusdam delectus commodi a ipsam aspernatur. Beatae natus
        veritatis commodi iste fuga eligendi! Eligendi ratione unde dolore ipsam
        quisquam omnis praesentium repellendus dolorum, ut qui totam recusandae
        mollitia quae officiis adipisci asperiores tenetur debitis ipsum,
        dolores impedit quia cumque laborum? Alias quisquam, sed recusandae sunt
        odio suscipit eum voluptate modi. Nobis dignissimos at officia, repellat
        alias quo blanditiis odit in, modi iusto laborum. Laborum velit atque
        molestiae odit ullam numquam eius incidunt nulla ex ratione quasi earum,
        exercitationem explicabo asperiores perferendis? Animi maxime nesciunt
        veniam repellendus, excepturi dolor nisi adipisci soluta suscipit
        itaque! Natus est numquam optio sit qui maxime atque incidunt fugit
        nisi, modi praesentium architecto. Quas distinctio ex architecto
        adipisci voluptate officiis, cupiditate impedit? Incidunt minima
        temporibus cupiditate ab eaque expedita a, quis sapiente consectetur
        neque laudantium nemo quam ea, debitis impedit veniam laboriosam dolor
        ullam sed nam quibusdam ipsum. A quod nobis ullam! Ad deleniti
        voluptatem, nisi eveniet natus, quas dicta nesciunt, necessitatibus
        ipsum dolores repellendus.
      </p>
    </div>
  );
};

export default ClubCard;
