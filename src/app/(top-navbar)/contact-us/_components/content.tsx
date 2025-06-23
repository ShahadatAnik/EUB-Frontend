import React from 'react';

import ContactForm from './contact-form';
import Contacts from './contacts';
import Map from './map';

const Content = () => {
	return (
		<div className=''>
			<div className='container py-6 lg:py-12'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
					<div className='lg:col-span-2'>
						<ContactForm />
					</div>
					<div>
						<Contacts />
					</div>
				</div>
			</div>
			<Map />
		</div>
	);
};

export default Content;
