import React from 'react';

import { ITuitionFee } from '@/types';

import SystemTable, { SystemTableColumn } from '@/components/table/system-table';

const TuitionFeesTable: React.FC<{
	data: ITuitionFee[];
	isGraduate?: boolean;
}> = ({ data, isGraduate }) => {
	const columns: SystemTableColumn<ITuitionFee>[] = [
		{
			accessorKey: 'program_name',
			header: 'Program / Degree',
		},
		{
			accessorKey: 'admission_fee',
			header: 'Admission Fee',
			type: 'currency',
		},
		{
			accessorKey: 'tuition_fee_per_credit',
			header: 'Tuition Fee per credit',
			type: 'currency',
		},
		{
			accessorKey: 'student_activity_fee',
			header: 'Student Activity Fee / Semester',
			type: 'currency',
		},
		{
			accessorKey: 'library_fee_per_semester',
			header: 'Library Fee / Semester',
			type: 'currency',
		},
		{
			accessorKey: 'computer_lab_fee_per_semester',
			header: 'Computer Lab Fee / Semester',
			type: 'currency',
		},
	];

	if (!isGraduate) {
		columns.push(
			{
				accessorKey: 'science_lab_fee_per_semester',
				header: 'Science Lab Fee / Semester',
				type: 'currency',
			},
			{
				accessorKey: 'studio_lab_fee',
				header: 'Studio Lab Fee / Semester',
				type: 'currency',
			}
		);
	}

	return <SystemTable data={data} columns={columns} />;
};

export default TuitionFeesTable;
