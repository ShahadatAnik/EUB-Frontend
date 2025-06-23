import React from 'react';

import Link from 'next/link';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

import { getJournal } from '@/server/get/get-journal';

import SystemTable, { SystemTableColumn } from '@/components/table/system-table';
import Title from '@/components/title';

import { formatDate } from '@/lib/utils';

const columns: SystemTableColumn<IDataTable>[] = [
	{
		accessorKey: 'description',
		cell: (value, row) => {
			return (
				<Link
					className='font-medium text-primary underline'
					href={`${secret.imageBaseUrl}${row.file}`}
					target='_blank'
				>
					{value}
				</Link>
			);
		},
	},
	{
		accessorKey: 'updated_at',
		cell: (value, row) => formatDate(value || row.created_at),
	},
];

const Content = async () => {
	const data = await getJournal();

	return (
		<div className='space-y-8'>
			<div>
				<Title title='EUB Journal' className='text-2xl' />
				<div className='flex flex-col space-y-2 pl-4 text-base'>
					<Link href={'#'} className='text-primary underline'>
						Copy Right Agreement
					</Link>
					<Link href={'#'} className='text-primary underline'>
						Administration, Policy, and Guideline
					</Link>
					<Link href={'#'} className='text-primary underline'>
						Publication Ethics and Malpractices Statement
					</Link>
					<Link href={'#'} className='text-primary underline'>
						Templates
					</Link>
				</div>
			</div>
			<SystemTable data={data} columns={columns} />
		</div>
	);
};

export default Content;
