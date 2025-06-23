import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import ContentWrapper from './content-wrapper';

const data = [
	{
		title: 'Workshop on better education',
		content:
			'A workshop on topics “Toward a Better Education and Future” and “Reflections on Teaching” was conducted on Saturday, November 12, 2016. Professor M. M. Shahidul Hassan, Vice Chancellor of East West University talked on “Toward a Better Education and Future” and Professor Anisul Haque, Dean, Faculty of Science and Engineering talked on “Reflections on Teaching”. All the faculty members of East West University were present in the workshop. The workshop materials can be downloaded from the following links.',
	},
	{
		title: 'Workshop on better education',
		content:
			'A workshop on topics “Toward a Better Education and Future” and “Reflections on Teaching” was conducted on Saturday, November 12, 2016. Professor M. M. Shahidul Hassan, Vice Chancellor of East West University talked on “Toward a Better Education and Future” and Professor Anisul Haque, Dean, Faculty of Science and Engineering talked on “Reflections on Teaching”. All the faculty members of East West University were present in the workshop. The workshop materials can be downloaded from the following links.',
	},
	{
		title: 'Workshop on better education',
		content:
			'A workshop on topics “Toward a Better Education and Future” and “Reflections on Teaching” was conducted on Saturday, November 12, 2016. Professor M. M. Shahidul Hassan, Vice Chancellor of East West University talked on “Toward a Better Education and Future” and Professor Anisul Haque, Dean, Faculty of Science and Engineering talked on “Reflections on Teaching”. All the faculty members of East West University were present in the workshop. The workshop materials can be downloaded from the following links.',
	},
	{
		title: 'Workshop on better education',
		content:
			'A workshop on topics “Toward a Better Education and Future” and “Reflections on Teaching” was conducted on Saturday, November 12, 2016. Professor M. M. Shahidul Hassan, Vice Chancellor of East West University talked on “Toward a Better Education and Future” and Professor Anisul Haque, Dean, Faculty of Science and Engineering talked on “Reflections on Teaching”. All the faculty members of East West University were present in the workshop. The workshop materials can be downloaded from the following links.',
	},
];

const WorkShop = () => {
	return (
		<ContentWrapper title='Workshop' className='py-2'>
			<Accordion type='multiple' className='w-full'>
				{data.map((item, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger
							iconClassName='text-border size-5'
							className='border-b bg-accent px-6 py-3 text-lg'
						>
							{item.title}
						</AccordionTrigger>
						<AccordionContent className='px-6 py-4 text-base'>{item.content}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</ContentWrapper>
	);
};

export default WorkShop;
