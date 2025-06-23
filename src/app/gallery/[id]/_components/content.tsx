import React from 'react';

import Image from 'next/image';

const Content = () => {
	return (
		<div className='container max-w-[800px] py-6 lg:py-12'>
			<div>
				<div>
					<div className='relative aspect-square w-full'>
						<Image fill src='/placeholder.svg' alt='placeholder' />
					</div>
					<h2 className='mt-4 font-poppins text-4xl font-medium leading-normal'>
						Lorem ipsum dolor sit amet.
					</h2>
					<p className='mt-1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit quas molestiae
						suscipit porro reprehenderit voluptatem facilis hic veniam nobis dolore, numquam alias
						necessitatibus maiores illo libero iure corporis autem id doloremque quam similique eum?
						Magnam, ut reiciendis sequi incidunt commodi eum placeat obcaecati iste officiis quos
						temporibus consequuntur, aliquam recusandae tenetur perspiciatis excepturi officia
						minima corporis natus amet? Aliquam, incidunt atque aut cum ratione dolor perferendis
						tempora odio sint nesciunt sit quisquam eum? Totam impedit tempora debitis, quidem
						sapiente mollitia, doloribus dolorem perspiciatis pariatur, nulla autem? Nam maiores
						eius expedita dolor libero vitae dicta. Mollitia pariatur sit eveniet reiciendis.
					</p>
				</div>

				<div className='mt-8 grid grid-cols-2 gap-4'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={index} className='relative aspect-square w-full'>
							<Image fill src='/placeholder.svg' alt='placeholder' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Content;
