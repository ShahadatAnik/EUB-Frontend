import React from 'react';

import { ICertificateFee, ITuitionFee } from '@/types';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { accordions } from '../_const/data';
import CertificateFeesTable from './certificate-fees-table';
import TuitionFeesTable from './tuition-fees-table';

const Undergraduate: React.FC<{
	undergraduateFeesData: ITuitionFee[];
	certificateFeesData: ICertificateFee[];
}> = ({ undergraduateFeesData, certificateFeesData }) => {
	return (
		<div>
			<TuitionFeesTable data={undergraduateFeesData} />

			<div className='mt-8'>
				<p>Pharmacy (Bi-Semester) : Tk. 10,000.00</p>
				<br />
				<p>
					Each student has to pay Tk. 10,000.00 as Caution money (Refundable) during the time of
					admission.
				</p>
				<br />

				<section id='other-certificate-courses'>
					<h4 className='mb-1 text-lg font-medium'>Fees for other certificate courses:</h4>
					<CertificateFeesTable data={certificateFeesData} />
				</section>

				<br />

				<strong>*Tuition waiver may be available as per EUB policy.</strong>

				<Accordion type='multiple' className='mt-2 w-full space-y-2'>
					{accordions.map((accordion, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger className='bg-primary px-4 py-2 text-base text-white lg:px-6 lg:py-3 lg:text-lg'>
								{accordion.title}
							</AccordionTrigger>
							<AccordionContent className='px-4 py-3 text-base'>
								{accordion.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default Undergraduate;
