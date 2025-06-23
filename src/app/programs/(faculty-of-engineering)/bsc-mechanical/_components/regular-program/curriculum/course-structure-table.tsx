import React from 'react';

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

const courseStructure = [
	{
		category: 'General Education',
		no_of_theory_courses: '5',
		sessional_courses: '-',
		total_credit: '14.00',
	},
	{
		category: 'Foundation Courses',
		no_of_theory_courses: '7',
		sessional_courses: '1',
		total_credit: '22.50',
	},
	{
		category: 'Inter disciplinary Engineering',
		no_of_theory_courses: '3',
		sessional_courses: '4',
		total_credit: '15.00',
	},
	{
		category: 'CSE Core',
		no_of_theory_courses: '22',
		sessional_courses: '17',
		total_credit: '91.50',
	},
	{
		category: 'Elective (Option I)',
		no_of_theory_courses: '2',
		sessional_courses: '2',
		total_credit: '9.00',
	},
	{
		category: 'Elective (Option II)',
		no_of_theory_courses: '2',
		sessional_courses: '-',
		total_credit: '6.00',
	},
	{
		category: 'Project and Thesis',
		no_of_theory_courses: '',
		sessional_courses: '',
		total_credit: '3.00',
	},
	{
		category: 'Industrial Training',
		no_of_theory_courses: '',
		sessional_courses: '',
		total_credit: '-',
	},
];

const CourseStructureTable = () => {
	return (
		<Table>
			<TableCaption>Course Structure</TableCaption>
			<TableHeader>
				<TableRow className='bg-primary hover:bg-primary'>
					<TableHead className='text-white'>Category</TableHead>
					<TableHead className='text-white'>No. of Theory Courses</TableHead>
					<TableHead className='text-white'>Sessional Courses (Minimum) </TableHead>
					<TableHead className='text-white'>Total Credit</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{courseStructure.map((row, index) => (
					<TableRow key={index}>
						<TableCell className='font-medium'>{row.category}</TableCell>
						<TableCell className=''>{row.no_of_theory_courses}</TableCell>
						<TableCell className=''>{row.sessional_courses}</TableCell>
						<TableCell className=''>{row.total_credit}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell>Minimum Requirement</TableCell>
					<TableCell>41</TableCell>
					<TableCell>24</TableCell>
					<TableCell>160.50</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default CourseStructureTable;
