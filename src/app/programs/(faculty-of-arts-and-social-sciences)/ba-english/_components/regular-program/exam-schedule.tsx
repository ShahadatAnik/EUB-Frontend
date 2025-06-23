import React from 'react';

import { columns, useGetRegularExamSchedule } from '@/hooks/use-get-course';

import SystemTable from '@/components/table/system-table';

import ContentWrapper from '../content-wrapper';

const ExamSchedule = () => {
	const { data } = useGetRegularExamSchedule('BA-ENGLISH');
	return (
		<ContentWrapper title='Exam Schedule'>
			<SystemTable caption='Exam Schedule' data={data!} columns={columns} />
		</ContentWrapper>
	);
};

export default ExamSchedule;
