import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from '@/config/footer-links';

import FooterMenu from './footer-menu';

const Footer = () => {
	return (
		<footer className='bg-primary py-8 lg:py-16'>
			<div className='container px-6 text-white'>
				<div className='flex flex-col gap-12 lg:flex-row'>
					<div className='space-y-8'>
						<div className=''>
							<h4 className='mb-2 text-xl font-semibold'>European University of Bangladesh</h4>
							<div className='space-y-1'>
								<p>
									<span className='font-bold'>Address : </span>
									2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh
								</p>
								<p>
									<span className='font-bold'>Admission Office : </span> 01968774933, 01968774931
									<br />
									01968774927 (Director)
								</p>
							</div>
						</div>
						<div className='flex flex-col'>
							<ul className='flex gap-4 lg:mb-4'>
								{socialLinks.map((link, index) => (
									<li key={index}>
										<Link href={link.href} target='_blank' className='inline-block size-fit'>
											<Image
												width={40}
												height={40}
												src={link.icon}
												alt={link.title}
												className='object-contain'
											/>
										</Link>
									</li>
								))}
							</ul>

							<small>Developed and Maintained by : EUB ICT Division</small>
							<small>
								&copy; 2012-{new Date().getFullYear()} European University of Bangladesh (EUB), All
								Rights Reserved.
							</small>
						</div>
					</div>
					<div className='flex-1'>
						<FooterMenu />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

{
	/*  */
}
