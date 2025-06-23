'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import data from '../_const/faq-data';

const Content = () => {
	return (
		<div>
			<Accordion type='multiple' className='w-full'>
				{data.map((item, index) => (
					<AccordionItem value={`item-${index + 1}`} key={index}>
						<AccordionTrigger
							iconClassName='text-primary'
							className='border-b bg-accent px-4 py-2 text-base lg:px-6 lg:py-3 lg:text-lg'
						>
							{index + 1 + '. '}
							{item.question}
						</AccordionTrigger>
						<AccordionContent className='py-3 pl-2 text-base lg:px-8 lg:py-4 lg:text-base'>
							{item.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Content;
