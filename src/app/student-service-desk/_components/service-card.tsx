import React from 'react';

const ServiceCard: React.FC<{
	title: string;
	children: React.ReactNode;
}> = ({ title, children }) => {
	return (
		<div className='border'>
			<h4 className='border-b bg-accent px-4 py-2 text-lg font-semibold text-primary lg:px-6 lg:py-3 lg:text-2xl'>
				{title}
			</h4>

			<div className='px-2 py-2 lg:px-5 lg:py-4'>{children}</div>
		</div>
	);
};

export default ServiceCard;
