import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const OrganogramFunction = () => {
	return (
		<ContentWrapper title='Organogram &amp; Functions' className='space-y-6 py-2'>
			<div>
				<Image
					className='mx-auto'
					width={600}
					height={600}
					src={'/images/Organogram-of-IQAC-EUB.jpg'}
					alt='Organogram'
				/>

				<p className='mt-6 text-justify'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, alias sequi! Tenetur
					rerum officiis, nihil voluptate debitis nobis obcaecati facilis porro quam maiores optio
					dolor dolores enim magnam esse earum reiciendis totam quos voluptates beatae vitae sunt
					sed ipsum qui? Minus quod, eum cumque debitis quaerat dolorem assumenda dolor qui quos
					aliquam eveniet, accusamus harum veritatis mollitia magni. Provident animi soluta veniam
					ipsa quo velit quis vel sint minus quam aspernatur labore ea voluptas, dolorum vero
					perspiciatis obcaecati eligendi error, facere delectus consequuntur architecto accusantium
					modi ut. Esse aliquam totam aspernatur! Debitis, a in voluptatum reiciendis asperiores
					perferendis! Nam, alias totam exercitationem saepe quo, cumque a commodi expedita
					doloribus architecto aliquam officiis dolores ducimus consequuntur ea repudiandae,
					delectus esse. Consectetur assumenda doloremque, sapiente dicta, quaerat eaque quas odio
					quis voluptate harum tempore? Aperiam maxime dolorum veniam repellendus quas, sint ipsa
					aliquam saepe sit debitis modi facere porro quod iusto, doloribus ea quasi nobis. Ea
					maiores temporibus eaque! Dolore, id explicabo! Minima, repudiandae deserunt! Error
					deserunt maxime repellendus praesentium, quibusdam cumque magni, debitis facere minima
					laudantium quas quo quisquam deleniti sunt omnis dolores at fugit doloremque nisi
					reiciendis perferendis libero? Quo nam dicta at iusto ex fugiat sit distinctio in quas.
				</p>
			</div>
		</ContentWrapper>
	);
};

export default OrganogramFunction;
