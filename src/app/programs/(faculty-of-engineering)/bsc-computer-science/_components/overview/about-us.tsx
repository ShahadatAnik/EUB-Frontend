import React from "react";

import ContentWrapper from "../content-wrapper";
import { useGetAboutUs } from "@/hooks/use-get-course";
import RichTextViewer from "@/components/rich-text-viewer";

const AboutUs = () => {
	const { data } = useGetAboutUs("bsc-cse");

	return (
		<ContentWrapper title="About Us">
			<RichTextViewer
				content={
					data && data.length > 0
						? data[0].description
						: "No description available"
				}
			/>
		</ContentWrapper>
	);
};

export default AboutUs;
