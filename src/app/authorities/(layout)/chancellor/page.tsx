import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesChancellor } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Chancellor",
	description: "The chancellor of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesChancellor();
	console.log(data);
	return <Content data={data} />;
};

export default Page;
