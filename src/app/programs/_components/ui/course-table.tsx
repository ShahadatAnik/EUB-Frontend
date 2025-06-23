import React from 'react';

import SystemTable, { type SystemTableColumn } from '@/components/table/system-table';

import type { Course } from '../../_config/curriculum';

interface CourseTableProps {
	courses: Course[];
	totalCredits: number;
	showTotal?: boolean;
	caption?: string;
}

export const CourseTable = React.memo<CourseTableProps>(
	({ courses, totalCredits, showTotal = true, caption }) => {
		const columns: SystemTableColumn<Course>[] = [
			{
				accessorKey: 'sl',
				header: 'Sl.',
				headerClassName: 'w-16 text-center',
				cellClassName: 'text-center font-medium',
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
				cellClassName: 'text-center font-medium',
			},
		];

		// Add total row to data if showTotal is true
		const tableData = showTotal
			? [
					...courses,
					{
						sl: 0,
						code: '',
						title: 'Total',
						credits: totalCredits,
					} as Course,
				]
			: courses;

		return (
			<SystemTable
				caption={caption}
				data={tableData}
				columns={columns}
				className='overflow-hidden'
			/>
		);
	}
);

CourseTable.displayName = 'CourseTable';
