'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { navLinks } from '@/config/nav-links';

import PageHeader from '@/components/page-header';

import Authorities from '../_components/authorities';

const Layout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const pathName = usePathname();
	const links = navLinks.find((link) => link.title === 'Authorities');

	if (!links?.children) return null;

	const title = links.children.find((link) => link.href === pathName)?.title;

	return (
		<>
			<PageHeader title={title || 'Authorities'} />
			<div className='py-6 lg:py-12'>
				<div className='container flex flex-col gap-8 lg:flex-row'>
					<Authorities />
					<div className='flex-1 space-y-10'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
