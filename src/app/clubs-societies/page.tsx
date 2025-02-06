"use server";
import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import { getAcademicCalender } from "@/server/getAcademicCalender";
import { getClubs } from "@/server/getClub";
import { IClub, IClubAndSociety } from "@/types";
import React from "react";
import ClubCard from "./_components/club-card";
import Content from "./_components/content";
import EventsCalendar from "./_components/events-calendar";
const Page = async () => {
	const data = await getAcademicCalender();
	const faculties: IClubAndSociety[] = [
		{
			label: "School of Business Administration",
			value: "School of Business Administration",
		},
		{
			label: "School of Arts and Social Sciences",
			value: "School of Arts and Social Sciences",
		},
		{
			label: "School of Science and Engineering",
			value: "School of Engineering",
		},
		{ label: "Extra Curricular Clubs", value: "Extra Curricular Clubs" },
		{
			label: "Documents and Forms",
			value: "Events Calendar",
			content: <EventsCalendar initialData={data} />,
		},
	];

	for (const faculty of faculties) {
		if (faculty.value === "events-calendar") continue;
		const clubs: IClub[] = await getClubs(faculty.label);

		faculty.clubs = clubs.map((club) => ({
			title: club.name,
			content: (
				<ClubCard
					key={club.president_name}
					name={club.president_name}
					image={
						`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${club.president_image}` ||
						"/person-placeholder.jpg"
					}
					designation={club.president_designation}
					phone={club.president_phone}
					email={club.president_email}
					description={club.message}
				/>
			),
		}));
	}
	return (
		<>
			<PageHeader
				image="/images/accounting-and-finance.jpg"
				title="Clubs and Societies"
			/>

			<PageContainer>
				<Content data={faculties} />
			</PageContainer>
		</>
	);
};

export default Page;
