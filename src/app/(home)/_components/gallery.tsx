import React from 'react';

import { getFeatures } from '@/server/get/get-feature';

import ClientImage from '@/components/client-image';
import NoticeBoard from '@/components/notice-board';

const Gallery = async () => {
	const data = await getFeatures();

	return (
		<section className='py-12 lg:py-16 2xl:py-20'>
			<div className='container space-y-4 lg:space-y-8'>
				{data[0]?.is_active && (
					<div className='flex flex-col gap-4 rounded-md border border-primary/10 p-4 shadow-sm md:flex-row lg:gap-8 lg:p-8'>
						<>
							<div>
								<ClientImage
									src={data[0]?.file}
									alt='Person'
									width={300}
									height={300}
									className='aspect-square'
								/>
							</div>
							<div className='flex-1'>
								<h2 className='text-2xl font-semibold'>{data[0]?.title}</h2>
								<p className='mt-2'>{data[0]?.description}</p>
							</div>
						</>
					</div>
				)}

				<div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
					<div className='space-y-4 lg:col-span-2 lg:space-y-8'>
						{(data[1]?.is_active || data[2]?.is_active) && (
							<div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
								{data[1]?.is_active && (
									<div className='rounded-md border border-primary/10 p-4 shadow-sm lg:p-8'>
										<>
											<h2 className='text-xl font-semibold lg:text-2xl'>{data[1]?.title}</h2>
											<p className='mt-1 lg:mt-2'>{data[1]?.description}</p>
										</>
									</div>
								)}

								{data[2]?.is_active && (
									<div className='rounded-md border border-primary/10 p-4 shadow-sm lg:p-8'>
										<>
											<h2 className='text-xl font-semibold lg:text-2xl'>{data[2]?.title}</h2>
											<p className='mt-1 lg:mt-2'>{data[2]?.description}</p>
										</>
									</div>
								)}
							</div>
						)}

						{data[3]?.is_active && (
							<div className='flex flex-col gap-4 rounded-md border border-primary/10 p-4 shadow-sm md:flex-row lg:gap-8 lg:p-8'>
								<div>
									<ClientImage
										src={data[3]?.file}
										alt='Person'
										width={300}
										height={300}
										className='aspect-square'
									/>
								</div>
								<div className='flex-1'>
									<h2 className='text-2xl font-semibold'>{data[3]?.title}</h2>
									<p className='mt-2'>{data[3]?.description}</p>
								</div>
							</div>
						)}
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
