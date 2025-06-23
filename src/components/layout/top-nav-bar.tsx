import React from 'react';

import Link from 'next/link';

import { topNavLinks } from '@/config/nav-links';

const TopNavbar = () => {
	return (
		<div className='hidden w-full bg-primary py-2 lg:block'>
			<div className='container flex items-center justify-center gap-4 divide-x divide-border'>
				{topNavLinks.map((link) => {
					if (link.newTab) {
						return (
							<Link
								target='_blank'
								key={link.title}
								href={link.href}
								className='pl-4 text-sm text-white hover:underline'
							>
								{link.title}
							</Link>
						);
					}

					return (
						<Link
							key={link.title}
							href={link.href}
							className='pl-4 text-sm text-white hover:underline'
						>
							{link.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TopNavbar;
