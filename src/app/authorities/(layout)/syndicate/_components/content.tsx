"use-client";
import Title from "@/components/title";
import { IMemberData } from "@/types/authorities";
import React from "react";
import MemberCard from "./member-card";

const Content: React.FC<{ data: IMemberData }> = ({ data }) => {
	if (!data || (data?.member.length === 0 && !data?.chairperson))
		return <div>No data</div>;
	return (
		<div className="space-y-8">
			<div>
				<Title title="Chairperson" />
				<MemberCard data={data?.chairperson} />
			</div>

			<div>
				<Title title="Members" />
				<div className="space-y-4">
					{data?.member.map((member) => (
						<MemberCard key={member?.id} data={member} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Content;
