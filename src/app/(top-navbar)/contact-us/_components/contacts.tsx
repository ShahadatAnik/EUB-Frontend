import React from 'react';

import { Mail, PhoneCall } from 'lucide-react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

import data from '../_const/department-contacts';

const Contacts = () => {
	return (
		<div>
			<h4 className='text-xl font-semibold'>Important Contacts</h4>

			<ul className='mt-2 space-y-2 text-muted-foreground'>
				<li className='flex items-center gap-2'>
					<Mail className='size-5' />
					<div className='flex-1'>
						<span>info@eub.edu.bd</span>
					</div>
				</li>
				<li className='flex items-center gap-2'>
					<PhoneCall className='size-5' />
					<div className='flex-1'>
						<span>01968774927 ( Admission Director), 01968774933, 01968774928, 01968774930-32</span>
					</div>
				</li>
			</ul>

			<Accordion type='single' collapsible className='mt-4 w-full space-y-1'>
				{data.map((item, index) => (
					<AccordionItem key={index} value={`item-${index + 1}`}>
						<AccordionTrigger className='bg-primary px-4 py-2 text-base text-white'>
							{item.title}
						</AccordionTrigger>
						<AccordionContent className='space-y-3 p-2 text-base'>
							{item.extensions && item.extensions.length > 0 && (
								<div className='flex gap-2'>
									<h4 className='text-sm font-semibold'>Extensions :</h4>
									<div className='flex flex-1 flex-wrap gap-2'>
										{item.extensions.map((extension, index) => (
											<Badge variant={'outline'} className='rounded-full font-normal' key={index}>
												{extension}
											</Badge>
										))}
									</div>
								</div>
							)}
							{item.emails && item.emails.length > 0 && (
								<div className='flex gap-2'>
									<h4 className='text-sm font-semibold'>Email : </h4>
									<div className='flex flex-1 flex-wrap gap-2'>
										{item.emails.map((email, index) => (
											<Badge variant={'outline'} className='rounded-full font-normal' key={index}>
												{email}
											</Badge>
										))}
									</div>
								</div>
							)}
							{item.phones && item.phones.length > 0 && (
								<div className='flex gap-2'>
									<h4 className='text-sm font-semibold'>Phone : </h4>
									<div className='flex flex-1 flex-wrap gap-2'>
										{item.phones.map((phone, index) => (
											<Badge variant={'outline'} className='rounded-full font-normal' key={index}>
												{phone}
											</Badge>
										))}
									</div>
								</div>
							)}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Contacts;
