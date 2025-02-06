import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesChairman } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Chairman",
	description: "The chairman of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesChairman();
	return <Content data={data} />;
};

export default Page;
