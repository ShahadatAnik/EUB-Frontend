import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesProVC } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Pro Vice Chancellor",
	description:
		"The pro vice chancellor of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesProVC();
	return <Content data={data[0]} />;
};

export default Page;
