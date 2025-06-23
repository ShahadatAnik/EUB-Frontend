'use client';

import { Separator } from '@/components/ui/separator';

import Sidebar from './sidebar';
import Tender from './tender';

const Content = () => {
	return (
		<div className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
			<Sidebar />
			<div className='flex-1 space-y-8 lg:space-y-16'>
				<Tender title='Standard Tender Documents (STD) for Goods' type='std_for_goods' />
				<Separator />
				<Tender title='Standard Tender Documents (STD) for Works' type='std_for_works' />
				<Separator />
				<Tender title='Standard Application Form for Enlistment (SAFE)' type='safe' />
				<Separator />
				<Tender
					title='Standard Format and Guideline for Evaluation (Evaluation)'
					type='evaluation'
				/>
			</div>
		</div>
	);
};

export default Content;
