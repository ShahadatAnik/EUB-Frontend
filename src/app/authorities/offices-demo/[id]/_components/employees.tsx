import React from 'react';

import Image from 'next/image';

import { Mail, Phone } from 'lucide-react';

import data from '../_const/employees-data';

const Employees = () => {
	return (
		<div className='grid grid-cols-1 gap-4'>
			{data.map((item, index) => (
				<div key={index} className='rounded-lg border py-3'>
					<div className='flex gap-4 px-3'>
						<Image src={item.image} alt={item.name} height={120} width={120} />

						<div className='flex flex-1 flex-col gap-3'>
							<div className='space-y-0.5'>
								<h6 className='text-xl font-semibold'>{item.name}</h6>
								<p className='text-base text-muted-foreground'>{item.designation}</p>
							</div>

							<div className='space-y-1'>
								<div className='flex items-center gap-2 text-sm text-muted-foreground'>
									<Mail className='size-4' />
									<span>{item.email}</span>
								</div>
								<div className='flex items-center gap-2 text-sm text-muted-foreground'>
									<Phone className='size-4' />
									<span>{item.phone}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Employees;
