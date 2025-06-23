import React from 'react';

import SystemTable, { SystemTableColumn } from '@/components/table/system-table';

const courseCategory = [
	{
		symbol: 'ACT',
		subject_name: 'Accounting',
	},
	{
		symbol: 'CHE',
		subject_name: 'Chemistry',
	},
	{
		symbol: 'CSE',
		subject_name: 'Computer Science and Engineering',
	},
	{
		symbol: 'ECO',
		subject_name: 'Economics',
	},
	{
		symbol: 'EEE',
		subject_name: 'Electrical and Electronics Engineering',
	},
	{
		symbol: 'ENG',
		subject_name: 'English',
	},
	{
		symbol: 'GED',
		subject_name: 'General Education',
	},
	{
		symbol: 'HSS',
		subject_name: 'Humanities and Social Sciences',
	},
	{
		symbol: 'IDE',
		subject_name: 'Interdisciplinary Engineering',
	},
	{
		symbol: 'MATH',
		subject_name: 'Mathematics',
	},
	{
		symbol: 'CE',
		subject_name: 'Civil Engineering',
	},
	{
		symbol: 'MGT',
		subject_name: 'Management',
	},
	{
		symbol: 'PHY',
		subject_name: 'Physics',
	},
	{
		symbol: 'IT',
		subject_name: 'Industrial Training',
	},
];

const columns: SystemTableColumn<{ symbol: string; subject_name: string }>[] = [
	{
		accessorKey: 'symbol',
		header: 'Letter Symbol',
		cellClassName: 'w-[200px] pl-4',
	},
	{
		accessorKey: 'subject_name',
		header: 'Subject Name',
	},
];

const CourseCategoryTable = () => {
	return <SystemTable caption='Course Category' data={courseCategory} columns={columns} />;
};

export default CourseCategoryTable;
