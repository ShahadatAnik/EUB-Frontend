'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import QuickLinks from '@/components/quick-links';
import { Separator } from '@/components/ui/separator';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import slugify from 'slugify';
import { IAcademicAccordion } from '@/types';
import StickySidebar from '@/components/sticky-sidebar';

const ContentLayout: React.FC<{
	accordions: IAcademicAccordion[];
	bannerImage: {
		src: string;
		alt: string;
	};
	showQuickLinks?: boolean;
}> = ({ accordions, bannerImage, showQuickLinks = true }) => {
	const pathName = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const contentParam = searchParams.get('content');
	const [activeAccordion, setActiveAccordion] = useState<string>('');

	const [content, setContent] = useState<React.ReactNode | string>(
		accordions[0]?.children?.[0].content || ''
	);

	const handleContent = (title: string) => {
		router.replace(
			`${pathName}?content=${slugify(title, {
				lower: true,
				remove: /[*+~()'"!:@]/g,
				trim: true,
			})}`,
			{ scroll: false }
		);
	};

	useEffect(() => {
		if (contentParam) {
			const matchedContent = (title: string) =>
				slugify(title, {
					lower: true,
					remove: /[*+~()'"!:@]/g,
					trim: true,
				}).includes(contentParam);

			accordions.map((item) => {
				if (matchedContent(item.title)) {
					setContent(item.content);
					setActiveAccordion(item.title);
				} else if (item.children) {
					item.children.map((child) => {
						if (matchedContent(item.title + ' ' + child.title)) {
							setContent(child.content);
							setActiveAccordion(item.title);
						}
					});
				}
			});
		} else {
			if (
				accordions.length > 0 &&
				accordions[0].children &&
				accordions[0]?.children.length > 0
			) {
				router.replace(
					`${pathName}?content=${slugify(
						accordions[0].title +
							' ' +
							accordions?.[0]?.children?.[0].title,
						{
							lower: true,
							remove: /[*+~()'"!:@]/g,
							trim: true,
						}
					)}`,
					{
						scroll: false,
					}
				);
			} else {
				router.replace(
					`${pathName}?content=${slugify(accordions[0].title, {
						lower: true,
						remove: /[*+~()'"!:@]/g,
						trim: true,
					})}`,
					{
						scroll: false,
					}
				);
			}
		}
	}, [contentParam, accordions, pathName, router]);

	return (
		<div className="space-y-10">
			{showQuickLinks && (
				<div className="grid lg:grid-cols-3 gap-4 lg:gap-10">
					<div className="lg:col-span-2">
						<div className="w-full aspect-video lg:aspect-auto lg:h-full lg:min-h-[360px]  relative">
							<Image
								fill
								className="object-cover object-top"
								src={bannerImage.src}
								alt={bannerImage.alt}
							/>
						</div>
					</div>
					<div>
						<h6 className="text-lg">Quick Links</h6>
						<Separator className="mt-2 mb-4" />
						<QuickLinks />
					</div>
				</div>
			)}

			<div className="grid lg:grid-cols-5 gap-10">
				<StickySidebar
					className="lg:w-full"
					containerClassName="lg:pt-0"
				>
					<Accordion
						value={activeAccordion}
						onValueChange={setActiveAccordion}
						type="single"
						collapsible
						className="space-y-1"
					>
						{accordions.map((item, index) => (
							<AccordionItem key={index} value={item.title}>
								{item.href ? (
									<Link target="_blank" href={item.href}>
										<AccordionTrigger
											showIcon={!!item.children}
											className="bg-primary px-4 h-12 text-white"
										>
											{item.title}
										</AccordionTrigger>
									</Link>
								) : (
									<>
										<AccordionTrigger
											showIcon={!!item.children}
											onClick={() => {
												if (item.content) {
													handleContent(item.title);
												}
											}}
											className={cn(
												'bg-primary px-4 h-12 text-white hover:no-underline',
												contentParam ===
													slugify(item.title, {
														lower: true,
														remove: /[*+~()'"!:@]/g,
														trim: true,
													}) &&
													'underline font-medium'
											)}
										>
											{item.title}
										</AccordionTrigger>
										{item.children && (
											<AccordionContent className="pl-2 flex flex-col pb-0 pt-1 space-y-1 ">
												{item.children.map(
													(child, index) => (
														<Button
															key={index}
															onClick={() => {
																if (
																	child.content
																) {
																	handleContent(
																		item.title +
																			' ' +
																			child.title
																	);
																}
															}}
															className={cn(
																'rounded-none justify-start bg-gray-700 text-wrap h-full text-start',
																contentParam ===
																	slugify(
																		item.title +
																			' ' +
																			child.title,
																		{
																			lower: true,
																			remove: /[*+~()'"!:@]/g,
																			trim: true,
																		}
																	) &&
																	'underline font-medium'
															)}
														>
															{child.title}
														</Button>
													)
												)}
											</AccordionContent>
										)}
									</>
								)}
							</AccordionItem>
						))}
					</Accordion>
				</StickySidebar>
				<div className="lg:col-span-4">{content}</div>
			</div>
		</div>
	);
};

export default ContentLayout;
