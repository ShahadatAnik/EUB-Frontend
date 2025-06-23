import React from 'react';

import { IOffice, IOfficeEntry } from '@/types';

import Employees from './employees';
import ListOfOffices from './list-of-offices';

const Content: React.FC<{
	data: IOfficeEntry[];
	listOfOffices: IOffice[];
	category: string;
}> = ({ data, listOfOffices, category }) => {
	return (
		<div className='py-6 lg:py-12'>
			<div className='container flex flex-col gap-8 lg:flex-row'>
				<ListOfOffices data={listOfOffices} />
				<div className='flex-1 space-y-4'>
					<p className='text-lg'>
						Office of the {category} is the central point of the university. This office plays a
						facilitating role in formulating administrative & academic policy of the university.
						Subsequently it acts as an implementing & coordinating body for execution of various
						decisions of the university.
					</p>
					<Employees data={data} />
				</div>
			</div>
		</div>
	);
};

export default Content;
