import React from 'react';

import { IOffer } from '@/types';
import Marquee from 'react-fast-marquee';

import ClientPdfLink from '@/components/client-pdf';

const Offers: React.FC<{ data: IOffer[] }> = ({ data }) => {
	if (data.length === 0) return null;

	return (
		<div className='absolute bottom-0 left-0 right-0 z-10 bg-primary'>
			<Marquee className='h-10 lg:h-14' autoFill pauseOnHover>
				<div>
					{data.map((item, index) => (
						<ClientPdfLink
							className='inline-block border-r px-5 text-sm text-white no-underline hover:underline lg:text-base'
							key={index}
							href={item.file}
							text={item.title}
						/>
					))}
				</div>
			</Marquee>
		</div>
	);
};

export default Offers;
