import React from 'react';

import SystemTable, { type SystemTableColumn } from '@/components/table/system-table';

import type { ElectiveCourseGroup } from '../../_config/curriculum';

interface ElectiveCourseTableProps {
	electiveCourses: ElectiveCourseGroup[];
	totalCredits: number;
	caption?: string;
}

interface FlattenedElectiveCourse {
	sl: string;
	code: string;
	title: string;
	credits: string;
	isFirstRow?: boolean;
	rowSpan?: number;
	groupName?: string;
}

export const ElectiveCourseGroupTable = React.memo<ElectiveCourseTableProps>(
	({ electiveCourses, totalCredits, caption }) => {
		// Flatten the elective courses data
		const flattenedData: FlattenedElectiveCourse[] = [];

		electiveCourses.forEach((group) => {
			group.courses.forEach((course, index) => {
				flattenedData.push({
					sl: `${course.sl}`,
					code: course.code,
					title: course.title,
					credits: course.credits.toString(),
					isFirstRow: index === 0,
					rowSpan: group.courses.length,
					groupName: group.title,
				});
			});
		});

		// Add total row
		flattenedData.push({
			sl: '',
			code: '',
			title: 'Total',
			credits: totalCredits.toString(),
		});

		const columns: SystemTableColumn<FlattenedElectiveCourse>[] = [
			{
				accessorKey: 'groupName',
				header: 'Group',
				headerClassName: 'w-40 text-center',
				cellClassName: 'text-center font-medium border-b bg-secondary/50 text-sm',
				cell: (value) => <div className='whitespace-pre-line text-center'>{value}</div>,
				rowSpan: (row) => (row.isFirstRow ? (row.rowSpan ?? 0) : 0),
				skipRender: (row) => !row.isFirstRow,
			},
			{
				accessorKey: 'code',
				header: 'Course Code',
				headerClassName: 'w-32',
				cellClassName: 'font-mono text-sm',
			},
			{
				accessorKey: 'title',
				header: 'Course Title',
			},
			{
				accessorKey: 'credits',
				header: 'Credits',
				headerClassName: 'w-20 text-center',
				cellClassName: 'text-center font-medium border-b',
			},
		];

		return (
			<SystemTable
				caption={caption}
				data={flattenedData}
				columns={columns}
				className='overflow-hidden'
			/>
		);
	}
);

ElectiveCourseGroupTable.displayName = 'ElectiveCourseTable';
