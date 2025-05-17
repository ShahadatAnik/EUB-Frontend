import SystemTable from "@/components/table/system-table";
import { columns, useGetRegularCourseOffer } from "@/hooks/use-get-course";
import React from "react";
import ContentWrapper from "../content-wrapper";

const ClassRoutine = () => {
	const { data } = useGetRegularCourseOffer("'BSC-IP");
	return (
		<ContentWrapper title="Course Offer">
			<SystemTable
				caption="Course Offer"
				data={data!}
				columns={columns}
			/>
		</ContentWrapper>
	);
};

export default ClassRoutine;
