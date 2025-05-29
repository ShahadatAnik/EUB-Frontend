'use client';

import React from 'react';

import NoticeCard from './notice-card';
import { IDataTable, IPaginationResponse } from '@/types';

import NoDataFound from '@/components/no-data-found';
import ServerPagination from '@/components/server-pagination';

const Content: React.FC<IPaginationResponse<IDataTable>> = (props) => {
	if (!props.data || props.data.length === 0) return <NoDataFound />;

	return (
		<div>
			{props.data.map((item, index) => (
				<NoticeCard key={index} data={item} />
			))}

			<div className="flex justify-center mt-2">
				<ServerPagination pagination={props.pagination} />
			</div>
		</div>
	);
};

export default Content;
