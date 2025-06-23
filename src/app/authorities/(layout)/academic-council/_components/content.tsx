'use-client';

import React from 'react';

import { IMemberData } from '@/types/authorities';

import Title from '@/components/title';

import MemberCard from './member-card';

const Content: React.FC<{ data: IMemberData }> = ({ data }) => {
	if (!data || (data?.member.length === 0 && !data?.chairperson)) return <div>No data</div>;
	return (
		<div className='space-y-8'>
			{data?.chairperson && (
				<div>
					<Title title='Chairperson' />
					<MemberCard data={data.chairperson} index={1} />
				</div>
			)}

			{data?.member_secretary?.length > 0 && (
				<div>
					<Title title='Member Secretary' />
					<div className='space-y-4'>
						{data.member_secretary.map((member) => (
							<MemberCard key={member.id} data={member} index={2} />
						))}
					</div>
				</div>
			)}
			{data?.member?.length > 0 && (
				<div>
					<Title title='Members' />
					<div className='space-y-4'>
						{data.member.map((member, index) => (
							<MemberCard key={member.id} data={member} index={index + 3} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Content;
