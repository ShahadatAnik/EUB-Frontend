import React from 'react';

import { Factory, GraduationCap, History, MapPin } from 'lucide-react';

const data = [
	{
		description: 'World-Class Education at an Affordable Cost',

		icon: GraduationCap,
	},
	{
		description: 'Flexible Learning for Working Professionals',
		icon: History,
	},
	{
		description: 'Prime Location for Easy Access',
		icon: MapPin,
	},
	{
		description: 'Real Industry Exposure & Career Opportunities',
		icon: Factory,
	},
];

const WhyEUB = () => {
	return (
		<section className='py-12 lg:py-16 2xl:py-20'>
			<div className='container'>
				<h2 className='mb-8 text-center font-poppins text-2xl font-medium text-primary 2xl:text-4xl'>
					Why EUB?
				</h2>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{data.map((item, index) => (
						<div key={index} className='flex flex-col items-center space-y-4 text-center'>
							<item.icon className='size-16 stroke-[0.75] text-primary lg:size-20' />
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyEUB;
