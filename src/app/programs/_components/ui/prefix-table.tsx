import React from 'react';

import SystemTable, { type SystemTableColumn } from '@/components/table/system-table';

import type { CoursePrefix } from '../../_config/curriculum';

interface PrefixTableProps {
	prefixes: CoursePrefix[];
	caption?: string;
}

export const PrefixTable = React.memo<PrefixTableProps>(({ prefixes, caption }) => {
	const columns: SystemTableColumn<CoursePrefix>[] = [
		{
			accessorKey: 'symbol',
			header: 'Letter Symbol',
			headerClassName: 'w-32',
			cellClassName: 'font-mono font-semibold text-center',
		},
		{
			accessorKey: 'name',
			header: 'Subject Name',
		},
	];

	return (
		<div className='max-w-2xl'>
			<SystemTable
				caption={caption}
				data={prefixes}
				columns={columns}
				className='overflow-hidden'
			/>
		</div>
	);
});

PrefixTable.displayName = 'PrefixTable';
