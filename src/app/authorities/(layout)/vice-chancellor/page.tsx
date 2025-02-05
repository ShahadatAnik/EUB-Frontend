import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesVC } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Vice Chancellor",
	description: "The vice chancellor of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesVC();
	return <Content data={data} />;
};

export default Page;
