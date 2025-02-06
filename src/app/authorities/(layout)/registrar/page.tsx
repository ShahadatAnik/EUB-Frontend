import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesRegistrar } from "@/server/get-authorities";
export const metadata = generateMetaData({
	title: "Register",
	description: "The registrar of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesRegistrar();
	return <Content data={data} />;
};

export default Page;
