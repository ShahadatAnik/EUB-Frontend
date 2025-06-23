import React from 'react';

import SystemTable, { SystemTableColumn } from '@/components/table/system-table';

const performanceCriteriaData = [
	{
		criteriaName: 'Class attendance & Participation',
		marks: '10',
	},
	{
		criteriaName: 'Continuous Assessment',
		marks: '30',
	},
	{
		criteriaName: 'Mid-term Examination',
		marks: '30',
	},
	{
		criteriaName: 'Final Examination',
		marks: '30',
	},
];

const columns: SystemTableColumn<{ criteriaName: string; marks: string }>[] = [
	{
		accessorKey: 'criteriaName',
		header: 'Criteria',
		cell: (value) => value,
	},
	{
		accessorKey: 'marks',
		header: 'Marks',
		cell: (value) => value,
	},
];

const PerformanceCriteriaTable = () => {
	return (
		<SystemTable caption='Performance Criteria' data={performanceCriteriaData} columns={columns} />
	);
};

export default PerformanceCriteriaTable;
