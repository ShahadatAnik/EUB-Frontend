import React from 'react';

import SystemTable, { SystemTableColumn } from '@/components/table/system-table';

interface IGradeTable {
	marks: string;
	grade: string;
	grade_point_equivalent: string | number;
	remarks: string;
}

const gradeTableData: IGradeTable[] = [
	{
		marks: '80% and above',
		grade: 'A+',
		grade_point_equivalent: 4.0,
		remarks: 'Outstanding',
	},
	{
		marks: '75% to less than 80%',
		grade: 'A',
		grade_point_equivalent: 3.75,
		remarks: 'Excellent',
	},
	{
		marks: '70% to less than 75%',
		grade: 'A-',
		grade_point_equivalent: 3.5,
		remarks: 'Very Good',
	},
	{
		marks: '65% to less than 70%',
		grade: 'B+',
		grade_point_equivalent: 3.25,
		remarks: 'Good',
	},
	{
		marks: '60% to less than 65%',
		grade: 'B',
		grade_point_equivalent: 3.0,
		remarks: 'Satisfactory',
	},
	{
		marks: '55% to less than 60%',
		grade: 'B-',
		grade_point_equivalent: 2.75,
		remarks: 'Above Average',
	},
	{
		marks: '50% to less than 55%',
		grade: 'C+',
		grade_point_equivalent: 2.5,
		remarks: 'Average',
	},
	{
		marks: '45% to less than 50%',
		grade: 'C',
		grade_point_equivalent: 2.25,
		remarks: 'Below Average',
	},
	{
		marks: '40% to less than 45%',
		grade: 'D',
		grade_point_equivalent: 2.0,
		remarks: 'Pass',
	},
	{
		marks: 'Less than 40%',
		grade: 'F',
		grade_point_equivalent: 0.0,
		remarks: 'Fail',
	},
];

const columns: SystemTableColumn<IGradeTable>[] = [
	{
		accessorKey: 'marks',
		header: 'Marks Obtained (out of 100)',
		cell: (value) => value,
	},
	{
		accessorKey: 'grade',
		header: 'Grade',
		cell: (value) => value,
	},
	{
		accessorKey: 'grade_point_equivalent',
		header: 'Grade Point Equivalent',
		cell: (value) => value,
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: (value) => value,
	},
];

const UgcGradingTable = () => {
	return <SystemTable caption='UGC Grading Scale' data={gradeTableData} columns={columns} />;
};

export default UgcGradingTable;
