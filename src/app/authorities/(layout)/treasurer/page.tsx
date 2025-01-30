import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesTreasurer } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Dean",
	description: "The dean of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesTreasurer();
	return <Content data={data[0]} />;
};

export default Page;
