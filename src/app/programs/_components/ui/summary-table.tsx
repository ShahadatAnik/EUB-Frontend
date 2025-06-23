import React from 'react';

import SystemTable, { type SystemTableColumn } from '@/components/table/system-table';

import type { CurriculumSummary } from '../../_config/curriculum';

interface SummaryTableProps {
	summaryData: CurriculumSummary[];
	caption?: string;
}

export const SummaryTable = React.memo<SummaryTableProps>(({ summaryData, caption }) => {
	// Calculate total credits
	const totalCredits = summaryData.reduce((sum, item) => sum + item.credits, 0);

	// Add total row to data
	const tableData = [
		...summaryData,
		{
			category: 'Total',
			credits: totalCredits,
			percentage: summaryData.some((item) => item.percentage) ? `100%` : undefined,
		},
	];

	const columns: SystemTableColumn<CurriculumSummary>[] = [
		{
			accessorKey: 'category',
			header: 'Category',
			cellClassName: 'w-80',
			cell: (value) => <div className='whitespace-pre-line text-sm'>{value}</div>,
		},
		{
			accessorKey: 'theory_courses',
			header: 'Theory Courses',
			headerClassName: 'w-24 text-center',
			cellClassName: 'text-center font-medium',
			isHidden: tableData.every((row) => row.theory_courses === undefined),
		},
		{
			accessorKey: 'sessional_courses',
			header: 'Sessional Courses',
			headerClassName: 'w-24 text-center',
			cellClassName: 'text-center font-medium',
			isHidden: tableData.every((row) => row.sessional_courses === undefined),
		},
		{
			accessorKey: 'credits',
			header: 'Credit',
			headerClassName: 'w-24 text-center',
			cellClassName: 'text-center font-medium',
		},
		{
			accessorKey: 'percentage',
			header: 'Credit Proportions (Percentage)',
			headerClassName: 'w-32 text-center',
			cellClassName: 'text-center font-medium',
			isHidden: tableData.every((row) => row.percentage === undefined),
		},
	];

	return (
		<SystemTable caption={caption} data={tableData} columns={columns} className='overflow-hidden' />
	);
});

SummaryTable.displayName = 'SummaryTable';
