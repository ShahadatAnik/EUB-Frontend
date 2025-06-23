import React from 'react';

import { IFinancialFaculty } from '@/types';

import { getFinancialInfoByGroup } from '../_config/getFinacialInfoByGroup';
import Arts from './arts';
import BBA from './bba';
import EngineeringDiploma from './engineering-diploma';
import EngineeringHsc from './engineering-hsc';
import Waiver from './waiver';

const Content: React.FC<{ data: IFinancialFaculty[] }> = ({ data }) => {
	const { engineering_hsc, engineering_diploma, bba, arts } = getFinancialInfoByGroup(data);

	return (
		<div className='space-y-12'>
			<EngineeringHsc data={engineering_hsc} />
			<EngineeringDiploma data={engineering_diploma} />
			<BBA data={bba} />
			<Arts data={arts} />

			<div className='text-center'>
				<h6 className='text-lg'>
					<span className='font-semibold'>Admission Office : </span> 01968774930-31, 01968774933,
					01968774927 (Admission Director).
				</h6>
				<h6 className='text-lg'>
					<span className='font-semibold'>Email : </span>
					admission@eub.edu.bd
				</h6>
				<h6 className='mt-2 text-lg font-semibold'>
					100% waiver for Son/Daughter of Freedom Fighter
				</h6>
			</div>
			<Waiver />
		</div>
	);
};

export default Content;
