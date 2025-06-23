import React from 'react';

interface IPageHeaderProps {
	title: string | React.ReactNode;
	description?: string;
	image?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
	title,
	description,
	image = '/images/bg-1.jpg',
}) => {
	return (
		<div
			style={{
				backgroundImage: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}url(${image})`,
			}}
			className='bg-default relative flex items-center py-8 lg:py-16'
		>
			<div className='absolute inset-0 bg-black/70'></div>
			<div className='container relative z-10 text-center'>
				{
					<h1 className='text-wrap font-poppins text-2xl font-semibold text-white lg:text-4xl 2xl:text-5xl 2xl:leading-[1.25]'>
						{title}
					</h1>
				}
				{description && (
					<p className='text-base text-slate-300 lg:mt-2 lg:text-lg'>{description}</p>
				)}
			</div>
		</div>
	);
};

export default PageHeader;
